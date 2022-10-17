const express = require('express')
const app = express()
const port = 5000

const { Sequelize } = require('sequelize');

const connect = () => {
  return new Sequelize('postgres', 'postgres', 'postgres', {
    dialect: 'postgres',
    host: 'db',
    dialectOptions: {
      // Your pg options here
    }
  });
}

app.get('/api', async (req, res) => {
  const sequelize = connect();
  const [results, metadata] = await sequelize.query("SELECT * FROM books");

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  return res.json(results)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
