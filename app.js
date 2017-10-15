const express = require('express')
    , path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, 'static')))

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), (err) => {
    if (err) return console.log(err)
    console.log("Nick's blog is up on port " + app.get('port'))
})