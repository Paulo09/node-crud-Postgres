// Do not expose your Neon credentials to the browser
// .env
PGHOST='ep-summer-leaf-24375741.us-east-2.aws.neon.tech'
PGDATABASE='neondb'
PGUSER='Paulo09'
PGPASSWORD='zKyNPp2Q8jfZ'
ENDPOINT_ID='ep-summer-leaf-24375741'

// app.js
const postgres = require('postgres');
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: 'require' });

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();