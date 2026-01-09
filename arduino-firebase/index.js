const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const admin = require('firebase-admin');

const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spirulina-214a9-default-rtdb.firebaseio.com"
});

const db = admin.database();

const port = new SerialPort({
  path: 'COM6',
  baudRate: 9600
});

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

console.log("🚀 Arduino started, listening...");

parser.on('data', (line) => {
  console.log("Raw:", line);

  const d = line.trim().split(',');

  // Expecting 4 values
  if (d.length !== 4) {
    console.log("❌ Invalid length:", d.length);
    return;
  }

  const temperature = parseFloat(d[0]);
  const humidity = parseFloat(d[1]);
  const light = parseFloat(d[2]);
  const airQuality = parseInt(d[3]);

  // 🔥 NaN PROTECTION (MOST IMPORTANT)
  if (
    isNaN(temperature) ||
    isNaN(humidity) ||
    isNaN(light) ||
    isNaN(airQuality)
  ) {
    console.log("❌ NaN detected, skipping write");
    return;
  }

  const sensorData = {
    temperature,
    humidity,
    light,
    airQuality,
    timestamp: Date.now()
  };

  db.ref("sensors").set(sensorData);
  console.log("🔥 Firebase updated successfully");
});
