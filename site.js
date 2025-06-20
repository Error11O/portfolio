import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import serverless from 'serverless-http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const templatesDir = path.join(__dirname, 'templates');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(templatesDir, 'home.html'));
});

export const handler = serverless(app);
