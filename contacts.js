import fs from "fs/promises";
import path from "path";
import { isAccessible } from "./lib/accesible.js";

class SortFile {
  constructor(dist) {
    this.dist = dist;
  }
  async #copyFile(file) {
    const folder = path.extname(file.path);
    const targetPath = path.join(this.dist, folder);
  }
  async #readFolder(base) {
    const files = await fs.readdir(base);
    for (const item of files) {
      const localBase = path.join(base, item);
      const state = await fs.stat(localBase);
      if (state.isDirectory()) {
        await this.readFolder(localBase);
      } else {
        await this.#copyFile({ name: item, path: localBase });
      }
    }
  }
}

export default SortFile;
