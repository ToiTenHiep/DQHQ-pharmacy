import fs from "fs";
import path from "path";

const bannerPath = path.join(process.cwd(), "content/banner/home.json");

export function getBannerData() {
  const rawData = fs.readFileSync(bannerPath, "utf-8");
  return JSON.parse(rawData);
}
