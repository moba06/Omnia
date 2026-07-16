const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');

// GET /api/timeline/:countryCode?startYear=2010&endYear=2024
router.get('/:countryCode', async (req, res) => {
  try {
    const { countryCode } = req.params;
    const { startYear = 2000, endYear = new Date().getFullYear() } = req.query;

    const result = await pool.query(
      `SELECT 
        DATE_TRUNC('year', event_date)::date as year, 
        COUNT(*) as event_count,
        category,
        STRING_AGG(DISTINCT title, ', ') as titles
      FROM events
      WHERE country_code = $1 
      AND EXTRACT(YEAR FROM event_date) >= $2
      AND EXTRACT(YEAR FROM event_date) <= $3
      GROUP BY DATE_TRUNC('year', event_date), category
      ORDER BY year DESC`,
      [countryCode.toUpperCase(), startYear, endYear]
    );

    res.json({
      countryCode,
      startYear: parseInt(startYear),
      endYear: parseInt(endYear),
      timeline: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch timeline' });
  }
});

module.exports = router;
