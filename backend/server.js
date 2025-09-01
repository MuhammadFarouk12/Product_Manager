import express from 'express'

const app = express()

app.get('/', (req, res)=>{
  res.json({"BLE": "RED"})
})

app.listen(8080, "localhost", ()=>{
  console.log("listening on port 8080")
})
