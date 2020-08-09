import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const GITHUB_ENDPOINT = 'https://api.github.com/graphql'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req;

  res.writeHead(200, { "Content-Type": "image/svg+xml" });
  // process.cwd() instead of __dirname for absolute path: https://nextjs.org/docs/basic-features/data-fetching#reading-files-use-processcwd
  const template = fs
    .readFileSync(`${process.cwd()}/public/templates/stats.svg`)
    .toString();
  const svg = template
    .replace(/\${\w{0,}}/g, (match) => {
      const key = match.slice(2).slice(0, -1);
      return (query?.[key] as string) ?? "NA";
    })
    .replace(/(\\\\|\\{|\\}|\\\$)/g, (match) => match.slice(-1)); // svg templating unescaping
  const img = Buffer.from(svg);
  // const img = fs.readFileSync(`${process.cwd()}/public/templates/stats.svg`);
  res.end(img);
};