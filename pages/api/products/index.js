export default function handler(req, res)
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