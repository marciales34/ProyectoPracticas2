const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// CORS: Permitir solicitudes desde tu frontend
app.use(cors({
  origin: 'https://miasistencia360.claro.com.co',
  credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());

// Configuración de Kanboard
const KANBOARD_URL = 'https://kanboard-operaciones-ocp.apps.ocpprd.claro.co/jsonrpc.php';
const KANBOARD_TOKEN = '495a2c3a569d902bb57144fa2d63828a050b90acdc434df470697f3a190b';
const PROJECT_ID = 3;

// Ruta para crear tarea en Kanboard
app.post('/kanboard', async (req, res) => {
  const { titulo, descripcion } = req.body;
  console.log('📥 Nueva tarea recibida:', req.body);

  try {
    const response = await axios.post(KANBOARD_URL, {
      jsonrpc: '2.0',
      method: 'createTask',
      id: 1,
      params: {
        token: KANBOARD_TOKEN,
        project_id: PROJECT_ID,
        title: titulo,
        description: descripcion
      }
    });

    console.log('✅ Tarea creada en Kanboard:', response.data);
    res.json({ mensaje: '✅ Tarea creada en Kanboard', resultado: response.data });
  } catch (error) {
    console.error('❌ Error al crear la tarea en Kanboard:', error.response?.data || error.message);
    res.status(500).json({ error: '❌ Error al crear la tarea en Kanboard' });
  }
});

// Certificados HTTPS
const httpsOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Iniciar servidor HTTPS
https.createServer(httpsOptions, app).listen(3000, () => {
  console.log('🚀 Servidor HTTPS para Integracion en Kanboard corriendo en https://192.168.1.111:3000');
});
