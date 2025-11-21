import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadsDir = path.join(__dirname, "uploads");
fs.readdirSync(uploadsDir).forEach(file => {
  if (path.extname(file).toLowerCase() === ".mp4") {
    const base = path.basename(file, ".mp4");
    const output = path.join(uploadsDir, `${base}.jpg`);
    if (!fs.existsSync(output)) {
      ffmpeg(path.join(uploadsDir, file))
        .setFfmpegPath(ffmpegPath)
        .on("end", () => console.log(`Generated thumbnail for ${file}`))
        .on("error", err => console.error(`Error: ${err.message}`))
        .screenshots({
          count: 1,
          folder: uploadsDir,
          filename: `${base}.jpg`,
          size: "320x240"
        });
    }
  }
});
