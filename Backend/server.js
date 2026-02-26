const app = require('./src/app')
const connectToDB = require('./src/config/database')
PORT = 3000

connectToDB()

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})