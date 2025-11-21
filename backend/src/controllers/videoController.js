import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// Pour simuler __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Le dossier des uploads
const uploadsDir = path.join(__dirname, "../../uploads");

// Export de la fonction selon la syntaxe ES Modules !
export function listVideos(req, res) {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) return res.status(500).json({ error: "Erreur lecture dossiers" });

    // Filtre uniquement fichiers .mp4
    const videos = files.filter(f => path.extname(f).toLowerCase() === ".mp4");

    const result = videos.map((video, idx) => {
      const videoPath = path.join(uploadsDir, video);
      const stats = fs.statSync(videoPath);

      // Cherche le thumbnail (même nom que vidéo, mais .jpg)
      const baseName = path.basename(video, ".mp4");
      const thumbnail = `${baseName}.jpg`;
      const thumbExists = files.includes(thumbnail);

      // Formatage date
      const created = stats.birthtime;
      const pad = n => n.toString().padStart(2, "0");
      const dateStr = `${created.getFullYear()}-${pad(created.getMonth() + 1)}-${pad(created.getDate())} ${pad(created.getHours())}:${pad(created.getMinutes())}:${pad(created.getSeconds())}`;

      return {
        id: idx + 1,
        thumbnail: thumbExists ? thumbnail : null,
        url: video,
        uploaded_at: dateStr,
      };
    });

    res.json(result);
  });
}
