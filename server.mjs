import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { mergerPdfs } from './merge.mjs';

const upload = multer({ dest: 'uploads/' });
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Output')));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Send index.html file when the root URL is requested
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public' , 'index.html'));
});

// Merge Routing
app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=>{
  console.log(req.files);
  let timeName = await mergerPdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));

  const fileOutput = path.join(__dirname, 'Output' , `${timeName}.pdf`);
  res.sendFile(fileOutput); 
});

// Error handling middleware
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
