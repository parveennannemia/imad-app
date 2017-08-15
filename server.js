var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
    title :'Article Page1',
    heading:'Article1',
    date:'Aug 11 2017',
    articleContent : ' <p>This is my First Article.This is my First Article.This is my First Article.<br>This is my First Article.This is my First Article.This is my First Article.<br>This is my First Article.This is my First Article. </p>'
};
function createTemplate(data){
    var title= '${data.title}';
    var heading='${data.head}';
    var date='${data.date}';
    var articleContent= '${data.articleContent}';
    
    var htmlTemplate=' <html><head>title.value<link href="/ui/style.css" rel="stylesheet" /></head><hr><body><div> <a href="\" >Home</a></div><h1>${heading}</h1><hr><div>${date}</div></hr><div class="content">${articleContent}</div><hr/></body> </html>'

return htmlTemplate;
} 
    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//app.get('/article-one',function(req,res){
//res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    //res.send(createTemplate(article1));
//});
app.get('/:articleName',function(req,res){
//res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
var articleName = req.param.articleName;
    res.send(createTemplate(articleName));
});

app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
