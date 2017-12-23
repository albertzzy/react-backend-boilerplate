const express = require('express');
const path = require('path');
const app = express();

// pollyfill for loosing dll files
app.use(express.static(path.resolve(__dirname,'../dist')));



// mock




// run
app.listen(9001,()=>{
    console.log('server is listening at 9001...')
})



