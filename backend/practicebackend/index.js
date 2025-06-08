const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Set the view engine to EJS
app.set('view engine','ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder (optional)
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
    fs.readdir(`./files`,(err, files)=>{
    res.render('index', {files:files}); // Looks for views/index.ejs||local files passing as a var
    })
});
app.get('/file/:filename', (req, res) => {
    fs.readFile(`./files/${req.params.filename}`,"utf-8", function (err, filedata) {
        res.render('show',{filename:req.params.filename , filedata: filedata});
        
    })
});
app.post('/create', (req, res) => {
    // console.log(req.body); //data coming on console after clicking create button

    // file me write krna hai
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function (err) {
        res.redirect('/')
    })
    
});


app.get('/edit/:filename',(req, res)=>{
        res.render('edit',{filename:req.params.filename});
});
app.post('/edit/:filename', function (req, res) {
    fs.rename(`./files/${req.body.previousName}`,`./files/${req.body.newName}`,function (err) {
        res.redirect('/');
    });
    
})


// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

