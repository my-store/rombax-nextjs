const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export default async function handler(req, res)
{
  try {
    const members = await DB.asyncFind({}, [['limit', 100]])
    if(members.length > 0) {
      res.status(200).json(members)
    }
    else {
      res.status(200).json({message: "Data masih kosong"})
    }
  }
  catch(error) {
    res.status(error).json(error)
  }
}
