const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://sbvjjvezaioeoc:152cda5e18d2f19ca06c97caed73738fa63e2101e4687bf2b3f880af816f36f9@ec2-54-147-93-73.compute-1.amazonaws.com:5432/dcpik0mcmvcpir',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client