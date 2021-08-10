const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export default async function handler(req, res)
{
  if(req.method === "GET") {
      res.status(200).json({
          data: null,
          message: "Data fetched."
      })
  }
  else if(req.method === "POST") {
    // 
  }
}