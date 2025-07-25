const pool = require('../config/db');

exports.saveEntry = async (req, res) => {
  const { name, mobile, prize } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO scratch_entries (name, mobile, prize) VALUES ($1, $2, $3) RETURNING *',
      [name, mobile, prize]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM scratch_entries ORDER BY claimed_at DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.checkCustomer = async (req, res) => {
  const { mobile } = req.body;
  try {
    const result = await pool.query(
      'SELECT 1 FROM scratch_entries WHERE mobile = $1 LIMIT 1',
      [mobile]
    );
    res.json({ exists: result.rowCount > 0 });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
};
