import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname)));
const templatesDir = path.join(__dirname, 'templates');
app.get('/', (req, res) => {
    res.sendFile(path.join(templatesDir, 'home.html'))
});
app.listen(5656, () => {
    console.log('http://localhost:5656')
});