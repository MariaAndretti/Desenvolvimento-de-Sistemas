const express = require("express")
const routes = require("./src/config/routes");
const dotenv = require('dotenv');

dotenv.config();
let app = express()
app.use(express.json())

routes(app)

app.listen(3000, ()=>{
  console.log("Server is running on http://127.0.0.1:3000")
})