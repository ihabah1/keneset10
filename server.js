const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const { start } = require('repl');
const { stringify } = require('querystring');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const mongoose = require('mongoose');
mongoose.connect('mongodb://ihabbbb:Ihab1990@cluster0-shard-00-00.lmggz.mongodb.net:27017,cluster0-shard-00-01.lmggz.mongodb.net:27017,cluster0-shard-00-02.lmggz.mongodb.net:27017/test?replicaSet=atlas-14d6y3-shard-0&ssl=true&authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('we are connected to DB')
})




const Knesetschema = new mongoose.Schema({
    title: String,
    text: String
});

const KnesetModel = mongoose.model('DbKneset', Knesetschema);


/// API -- Form 
const Knesetschema2 = new mongoose.Schema({
  title: String,
  text: String,
  haver: String
});


const KnesetModel2 = mongoose.model('DbKneset2', Knesetschema2);

/**
const oneForm = new KnesetModel2({ title: 'test', text: 'test',haver:'test' });
oneForm.save().then(()=>console.log('saved to DB'));
 */

 

  app.get("/testAPI1",function(req,res,next){
    KnesetModel.find().then((doc)=>{
     /**  console.log(doc); */
      res.send(doc)
    });

  })
  
  app.post('/pingOne', function (req, res) {
    var json= JSON.stringify(req.body);  
   
    var obj = JSON.parse(json);
    
    console.log("****"+obj.subject);
    console.log("****"+obj.Text);
    console.log("****"+obj.Haver);
   var a = obj.subject; 
   var b = obj.Text; 
   var c = obj.Haver; 

    const oneForm = new KnesetModel2({ title: a , text: b, haver: c});

    oneForm.save().then(()=>console.log('saved to DB'));
   // console.log(Subjet);

    res.send("ssssssss")
  });

/**
  app.post('/pingOne', function (req, res) {
    console.log("server");

    console.log(req.body); 
  return  res.send("sad")
  });
 */






app.post('/send-DbKneset-name', (req, res) => {
    try {
       // const { name } = req.body;
       const pil = new Kitten({ title: 'abba', text: 'jbj' });
        if (typeof title !== 'string') throw new Error('name is not a string')

        if (title.length > 0) {
            let newKitten = pil;
            newKitten.save().then(()=>console.log('kiten saved'))
            res.send({ ok: true })
        } else{
            throw new Error('name is empty string')
        }
        
    } catch (e) {
      console.log(e.Error); 
        res.send({ ok: false, error: e })
    }
})





app.post('/pingOne', function (req, res) {
  console.log("Data received");
  res.send('success')
});



app.get("/testAPI",function(req,res,next){
  res.send(blocks);
})


app.get('/ping', function (req, res) {
  console.log("server");
return res.send('pong');
});




app.listen(process.env.PORT || 5000);
console.log('listening on 5000')



/**
 * const blocks = {
  "blocks": [
  {title:'כנסת ישראל', text:'הכנסת היא הרשות המחוקקת ובית הנבחרים של מדינת ישראל. מקום מושבה הוא משכן הכנסת שבקריית הממשלה בירושלים. בהיות ישראל דמוקרטיה פרלמנטרית, בוחרים אזרחי המדינה את נציגיהם בכנסת והם אלה שממנים את הממשלה, הזקוקה לאמונם. שיטת הבחירות היא ארצית-יחסית, והאזרחים בוחרים ברשימות של המפלגות השונות.'},
  {title:'חקיקת משנה', text:'חקיקת משנה היא חקיקה שנעשתה על ידי מי שהוסמך לכך על ידי המחוקק, ולא על ידי המחוקק עצמו. גם במובן זה היא שנייה, ואין לה תוקף לפני שהמחוקק סיים את החקיקה העיקרית.'},
  {title:'הרשות המבצעת', text:'סמכות להתקין חקיקת משנה ניתנת בחקיקה ראשית לגורם של הרשות המבצעת: שר, פקיד בכיר וכדומה. בהתאם לשיקול דעתו ולסמכות שניתנה לו בחוק, בעל הסמכות מנסח את חקיקת המשנה. לפי סעיף 15 לחוק הפרשנות, מי שמוסמך להתקין תקנות, מוסמך גם לשנותן או לבטלן.'},
]}


const one = new KnesetModel({ title: 'test', text: 'test',haver:'test' });
one.save().then(()=>console.log('saved to DB'));

const two = new KnesetModel({ title:'כנסת ישראל', text: 'הכנסת היא הרשות המחוקקת ובית הנבחרים של מדינת ישראל. מקום מושבה הוא משכן הכנסת שבקריית הממשלה בירושלים. בהיות ישראל דמוקרטיה פרלמנטרית, בוחרים אזרחי המדינה את נציגיהם בכנסת והם אלה שממנים את הממשלה, הזקוקה לאמונם. שיטת הבחירות היא ארצית-יחסית, והאזרחים בוחרים ברשימות של המפלגות השונות.' });
two.save().then(()=>console.log('saved to DB'));

const three = new KnesetModel({ title: 'כנסת ישראל', text: 'הכנסת היא הרשות המחוקקת ובית הנבחרים של מדינת ישראל. מקום מושבה הוא משכן הכנסת שבקריית הממשלה בירושלים. בהיות ישראל דמוקרטיה פרלמנטרית, בוחרים אזרחי המדינה את נציגיהם בכנסת והם אלה שממנים את הממשלה, הזקוקה לאמונם. שיטת הבחירות היא ארצית-יחסית, והאזרחים בוחרים ברשימות של המפלגות השונות.' });
three.save().then(()=>console.log('saved to DB'));
*/