const data = require("./db.json");
const { NextResponse } = require("next/server");

async function GET(req) {
  return NextResponse.json(data);
}

module.exports = {
  GET
};
