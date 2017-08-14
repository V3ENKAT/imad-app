var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
        article-one : {
        title: 'Article One I VENKAT',
        heading: 'Article One',
        date:  'Aug 14 2017',
        content:  `<p>
                    This is the content of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  
                    </p>
                    <p>
                    This is the content of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  
                    </p>
                    <p>
                    This is the content of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  of my first article.  
                    </p>`
                    
        },
        article-two : {title: 'Article Two I VENKAT',
        heading: 'Article Two',
        date:  'Aug 15 2017',
        content:  `<p>
                    This is the content of my Second article.  
                    </p> `
        },
        article-three: {title: 'Article Three I VENKAT',
        heading: 'Article Three',
        date:  'Aug 16 2017',
        content:  `<p>
                    This is the content of my Third article.  
                    </p> `
},
};
function createTemplate(data){
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
var htmlTemplate= 
`
<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
<body>
    <div Class="cont">
      <div>
        <a href="/">Home</a>
      </div>
        <hr/>
        <h3>    
            ${heading}
        </h3>
      <div>
            ${date}
      </div>
        <div>
            ${content}
            
            </div>
    </div>
</body>

</html>
`
;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));});
  
app.get('/:articleName', function (req, res) {
    //articleName --- article-one
    //artilces[articleName]--- {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles{articleName}));});

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
