const express= require('express')

const port = 5000 

const app = express()

app.get("/", (req , res ) => { 

      res.json({message : "Hello World"})
})
app.listen(port , () => console.log(`Server Listening on port  ${port}`)) 

