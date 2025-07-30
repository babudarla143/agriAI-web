const express = require('express');
const cors = require('cors');
const adviceRoutes = require('./routes/adviceRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/advice', adviceRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));