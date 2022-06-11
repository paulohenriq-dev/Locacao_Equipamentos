import express from 'express';
import { healthRouter } from './health/health.routes'
import { equipRouter } from "../src/equipaments/equipaments.router";

const app = express();

app.use(express.json());

// Rotas
app.use(healthRouter)
app.use(equipRouter)

app.listen(3333, () => {console.log('Servidor rodando!')});