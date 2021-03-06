var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require ('pg').Pool;


var config = {
    user: 'sanvenkat21072017',
    database: 'sanvenkat21072017',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD,
};
var app = express();
app.use(morgan('combined'));
var articles = {
        'article-one' : {
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
        'article-two' : {title: 'Article Two I VENKAT',
        heading: 'Article Two',
        date:  'Aug 15 2017',
        content:  `<p>
                    This is the content of my Second article.  
                    </p> `
        },
        'article-three' : {title: 'Article Three I VENKAT',
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
 var pool = new Pool(config);
  app.get('/test-db', function (req, res){
      
      //make a select request
      //return a reponse with the results 
        pool.query('select * from "Article Table"',function (err,result) 
        {
            if(err){
                res.status(500).send(err.toString());
            } else {
                res.send(JSON.stringify(result.rows));
            }
        });
  });
var counter = 0;
app.get('/counter', function (req,res){counter = counter + 1;
    res.send(counter.toString());
});
var names=[];
app.get('/submit-name',function(req,res){//URL:/submit-name?name-xxxxx
    //Get the name from the request
    var name=req.query.name; 
    names.push(name);
    //JSON: Javascript Object Notation
     
    res.send(JSON.stringify(names)); 
});
app.get('/articles/:articleName', function (req, res) {
    //articleName --- article-one
    //artilces[articleName]--- {} content object for article one
  //  var articleName = req.params.articleName;
    // SELECT * FROM article WHERE title = 'article-one'
    
    pool.query("SELECT * FROM article WHERE title =  ' +req.params.articleName+ ' " , function(err, result){
        if (err){
                res.status(500).send(err.toString());
        }else {
            if (result.rows.length === 0) {
res.status(404).send('hehehe Article not found');            
        } else { 
            var articleData=result.rows[0];
            res.send(createTemplate(articleData));
        }}
        
    });
    
    
});
            
            
        


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
    