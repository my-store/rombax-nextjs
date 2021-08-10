const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

async function handler(req, res)
{
  if(req.method === "GET") {
    const members = await DB.asyncFind({}, [['limit', 100]])
    res.status(200).json({
      data: members,
      message: `${members.length} data fetched.`
    })
  }
  else if(req.method === "POST") {
    // 
  }
}

export default handler
