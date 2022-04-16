const express = require('express')
const mariadb = require('mariadb')
const app = express()

const pool = mariadb.createPool({
    host: "172.26.0.1",
    user: "root",
    password: "password",
    database: "demo",
    port: "3306",

})

const p = pool.getConnection().then((resPool) => {
    console.log('connected to mariadb...')
}).catch((err) => {
    console.log(err)
})

app.get('/', (req, res) => {
    res.send('docker is working...')
})

app.listen(80, () => {
    console.log('working...')
})