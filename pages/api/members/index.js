const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

async function handler(req, res)
{
  if(req.method === "GET") {
    try {
      const members = await DB.asyncFind({}, [['limit', 100]])
      if(members.length > 0) {
        res.status(200).json({
          data: members,
          message: `${members.length} data fetched.`
        })
      }
      else {
        res.status(200).json({
          data: null,
          message: "Data masih kosong"
        })
      }
    }
    catch(error) {
      res.status(error).json(error)
    }
  }
  else if(req.method === "POST") {
    // 
  }
}

export default handler
