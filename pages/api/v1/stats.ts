import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.writeHead(200, { "Content-Type": "image/png" });
  const img = fs.readFileSync('./public/image.png');
  res.end(img);
};
