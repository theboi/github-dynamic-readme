import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const TEMPLATES = {
  CIRCLE: `
  <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
     <circle cx="25" cy="25" r="20"/>
     <text x="50%" y="50%" style="fill:white">\${hello}</text>
  </svg>`,
  LANGS: ``,
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: {
      field = "[]"
    }
  } = req

  res.writeHead(200, { "Content-Type": "image/svg+xml" });
  const template = fs.readFileSync(`${process.cwd()}/public/templates/stats.svg`).toString();
  const svg = template.replace(/\${\w{0,}}/g, (match) => {
    const key = match.slice(2).slice(0, -1);
    return "hello";
  });
  const img = Buffer.from(svg);
  // const img = fs.readFileSync(`${process.cwd()}/public/templates/stats.svg`);
  // Use process.cwd() instead of __dirname: https://nextjs.org/docs/basic-features/data-fetching#reading-files-use-processcwd
  res.end(img);
};
