const express = require('express')
const { database } = require('./database')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) => res.send('INDEX'))

app.use('/students', require('./routes/students'))

app.use('/campuses', require('./routes/campuses'))

database.sync().then(() =>{
    app.listen(PORT, () =>
        console.log(`Serving portmanteau since there were ports ${PORT}`)
    )
})

