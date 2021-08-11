const { AsyncNedb } = require("nedb-async")
const DB = new AsyncNedb({ filename: "databases/Products.db", autoload: true })

async function handler(req, res) 
{
  if (req.method === "GET") {
    const products = await DB.asyncFind({}, [["limit", 100]])
    res.status(200).json({
      data: products,
      message: `${products.length} data fetched.`
    })
  }
  else if (req.method === "POST") {
    re.status(200).json({
      message: "Success"
    })
  }
}
export default handler
