import { NextApiRequest, NextApiResponse } from "next";
import desserts from "../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(desserts);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
