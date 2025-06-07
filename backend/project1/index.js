const express = require('express')
const app = express();
const path =require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));   //en do line k wjh se hm form ko use kr payege

app.use(express.static(path.join(__dirname, 'public')));         //  joining (current dir path + public) path to access all static  file(image, javascript, stylesheet all are static file)
                                                                 // //console.log(__dirname);                     //->    /home/hariom/Project/Learning/javascript/backend/project1(dir. in w/c we are working)
                                                                 //har request k liye static file yha dhundhna hai

app.set('view engine','ejs')//backend kya render(view) krega ?? ejs pages

//rotue set krna
app.get('/',function (request,response) {
    // console.log('working');
    // response.send('working perfect')
    response.render('index');                                                        //like this we can show any page on frontend on  web-browser
});

app.get('/profile/:username', function (request, response) {
                        //req.param=> aysa kuchh v jiske age parameter hai
    response.send(`Welcome ${request.params.username} !`);
    
})
app.listen(3000,function () {
    console.log('running');
    
});
