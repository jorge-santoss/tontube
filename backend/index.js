// import express from 'express';
// import cors from 'cors';


// const app = express();
// app.use(cors());

// const port = 3000;

// app.listen(port, function() {
//     console.log(`server start at http://localhost:${port}`);
// });





// import express from "express";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import { listVideos } from "./src/controllers/videoController.js";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// app.use(cors());

// // Sert tous les fichiers du dossier uploads en public comme /uploads/tonfichier
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Route qui retourne la liste des vidéos (JSON)
// app.get('/', listVideos);


// // Route d'accès direct à un fichier (gérée aussi par middleware static)
// app.get('/uploads/:filename', (req, res) => {
//   const fileName = req.params.filename;
//   res.sendFile(path.join(__dirname, 'src', 'uploads', fileName));
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`TonTube lancé : http://localhost:${PORT}`);
// });





import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { listVideos } from "./src/controllers/videoController.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

// Sert les fichiers de /src/uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route liste JSON des vidéos
app.get('/', listVideos);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`TonTube lancé : http://localhost:${PORT}`);
});
