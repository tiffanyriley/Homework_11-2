const express=require('express')

const app=express();

let PORT=5000;

app.get('/',(req,res)=>{
res.send('99 Bottles of beer on the wall')
})

app.get('/:bottles',(req,res)=>{
    res.send(` Bottles of beer on the wall. take one down, pass it around <a  href=${req.params.bottles-1}>${req.params.bottles}  </a> `)
    })

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})
