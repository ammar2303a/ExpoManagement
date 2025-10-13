import express from 'express'

const app = express();

app.get('/test', (req, res) => {
    res.json({'msg': 'testing api'})
})

app.listen(5000, ()=>{
console.log('Applictation running on port 5000')
})

