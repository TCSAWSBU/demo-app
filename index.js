const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.get('/health', (req, res) => {
  res.status(200).json('Healthy')
});

// // Create a connection pool to the PostgreSQL database
// const pool = new Pool({
//   user: 'your_username',
//   host: 'localhost',
//   database: 'students_app',
//   password: 'your_password',
//   port: 5432,
// });

// // Middleware to parse JSON request bodies
// app.use(express.json());

// app.get('/health', (req, res) => {
//   res.status(200).json('Healthy')
// });

// // Retrieve all students
// app.get('/students', async (req, res) => {
//   try {
//     const { rows } = await pool.query('SELECT * FROM students');
//     res.json(rows);
//   } catch (error) {
//     console.error('Error retrieving students:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Create a new student
// app.post('/students', async (req, res) => {
//   const { name, age } = req.body;

//   try {
//     const { rows } = await pool.query(
//       'INSERT INTO students (name, age) VALUES ($1, $2) RETURNING *',
//       [name, age]
//     );

//     res.status(201).json(rows[0]);
//   } catch (error) {
//     console.error('Error creating student:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Update a student
// app.put('/students/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, age } = req.body;

//   try {
//     const { rows } = await pool.query(
//       'UPDATE students SET name = $1, age = $2 WHERE id = $3 RETURNING *',
//       [name, age, id]
//     );

//     if (rows.length === 0) {
//       res.status(404).json({ error: 'Student not found' });
//     } else {
//       res.json(rows[0]);
//     }
//   } catch (error) {
//     console.error('Error updating student:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Delete a student
// app.delete('/students/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const { rows } = await pool.query('DELETE FROM students WHERE id = $1', [id]);

//     if (rows.length === 0) {
//       res.status(404).json({ error: 'Student not found' });
//     } else {
//       res.sendStatus(204);
//     }
//   } catch (error) {
//     console.error('Error deleting student:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
