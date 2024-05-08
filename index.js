import 'dotenv/config'
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`)
})