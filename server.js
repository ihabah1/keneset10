const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

const price = 100; 

app.post('/pingOne', function (req, res) {
  console.log("server");
  res.send('POST request to the homepage')
});

const blocks = {
  "blocks": [
  {title:'כנסת ישראל', text:'הכנסת היא הרשות המחוקקת ובית הנבחרים של מדינת ישראל. מקום מושבה הוא משכן הכנסת שבקריית הממשלה בירושלים. בהיות ישראל דמוקרטיה פרלמנטרית, בוחרים אזרחי המדינה את נציגיהם בכנסת והם אלה שממנים את הממשלה, הזקוקה לאמונם. שיטת הבחירות היא ארצית-יחסית, והאזרחים בוחרים ברשימות של המפלגות השונות.'},
  {title:'חקיקת משנה', text:'חקיקת משנה היא חקיקה שנעשתה על ידי מי שהוסמך לכך על ידי המחוקק, ולא על ידי המחוקק עצמו. גם במובן זה היא שנייה, ואין לה תוקף לפני שהמחוקק סיים את החקיקה העיקרית.'},
  {title:'הרשות המבצעת', text:'סמכות להתקין חקיקת משנה ניתנת בחקיקה ראשית לגורם של הרשות המבצעת: שר, פקיד בכיר וכדומה. בהתאם לשיקול דעתו ולסמכות שניתנה לו בחוק, בעל הסמכות מנסח את חקיקת המשנה. לפי סעיף 15 לחוק הפרשנות, מי שמוסמך להתקין תקנות, מוסמך גם לשנותן או לבטלן.'},
]}


app.get("/testAPI",function(req,res,next){
  res.send(blocks);
})


app.get('/ping', function (req, res) {
  console.log("server");
return res.send('pong');
});




app.listen(process.env.PORT || 5000);
console.log('listening on 5000')