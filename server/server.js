const express = require('express')
const path = require('path'); 
const publicPath = path.join(__dirname,'../public'); 

const port = process.env.PORT || 3000; 



const app = express();
app.use('/', express.static(publicPath));

app.get('/home',(req,res)=>{
    res.send('nothing here yet');
})




console.log(publicPath);

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})

