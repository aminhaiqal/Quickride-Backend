const express = require('express');
const app = express();
const authRoutes = require('./src/authentication/routes/auth_route');

app.use(express.json());

app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}: http://localhost:${PORT}`);
});
