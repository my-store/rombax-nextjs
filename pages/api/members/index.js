async function handler(req, res)
{
  const { AsyncNedb } = require("nedb-async")
  const DB = new AsyncNedb({filename: "databases/Members.db", autoload: true})

  if(req.method === "GET") {
    const members = await DB.asyncFind({}, [['limit', 100],["sort", {_id: 1}]])
    res.status(200).json({
      data: members,
      message: `${members.length} data fetched.`
    })
  }
  else if(req.method === "POST") {
    const data = JSON.parse(req.body)
    const member = await DB.asyncInsert(data)
    res.status(200).json({
      message: "Success",
      data: member
    })
  }
}
export default handler
