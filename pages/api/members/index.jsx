const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

export default async function handler(req, res)
{
  try {
    const members = await DB.asyncFind({}, [['limit', 100]])
    res.status(200).json(members)
  }
  catch(error) {
    res.status(error).json(error)
  }
}
