const express = require('express')
const app = express()
app.use(express.json());
const authRouter = require('./routers/auth_router');
const port = 3000

app.use('/account', authRouter);

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})