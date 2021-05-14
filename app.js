import { Command } from "commander/esm.mjs";
import SortFile from "./contacts.js";

const program = new Command();

program
  .requiredOption("-s, --source <type>", "source folder")
  .option("-o, --output <type>", "Выходящая папка", "/dist");

program.parse(process.argv);

const { source, output } = program.opts();

//console.log(source, output);
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

try {
  const sorting = new SortFile(output);
  await sorting.readFolder(resolve(__dirname, source));
} catch (error) {
  console.log(error.message);
  process.exit(1);
}

console.log("Completed!");
