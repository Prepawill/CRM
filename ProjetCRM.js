var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('Public'));
var clientList = [
{
	firstName : "John", lastName : "Doe" , email : "john@gmail.com", phone : "0612457845", like : "like", quantite : 0
},
{
	firstName : "Don", lastName : "Draper", email : "don@gmail.com", phone : "0654453587", like : "like", quantite : 0
},
{
	firstName : "Jon", lastName : "Snow" , email: "snow@gmail.com", phone : "0854357845", like : "like", quantite : 0
}];


app.get('/', function (req, res) { 
  res.render('indexhtml', {
  	clientList : clientList,
  });
});

/*   http://localhost:8080/add?firstName=Son&lastName=Goku&email=songoku@gmail.com&phone=0698765432   */

app.get('/add', function (req, res) {
      if(req.query.firstName.length !=0 ){
      if(req.query.lastName.length !=0 ){
      if(req.query.email.length !=0 ){
      if(req.query.phone.length !=0 ){
      }}}}
      clientList.push(req.query);
      res.render('indexhtml', {clientList : clientList});
});

/*   http://localhost:8080/update?i=0&select=firstName&value=Willy   */
app.get('/update', function (req, res) {
  if(clientList[req.query.i] != undefined){
  if(req.query.value != 0){
  clientList[req.query.i][req.query.select]=req.query.value;
  }}
  res.render('indexhtml', {
  	clientList : clientList,
  });
});

/*   http://localhost:8080/delete?position=0   */

app.get('/delete', function (req, res) {
  if(clientList[req.query.i] != undefined){
  clientList.splice(req.query.i, 1);
  }
  res.render('indexhtml', {
    clientList : clientList,
  });
});


var port = (process.env.PORT || 80)
app.listen(port, function () {
  console.log("Server listening on port 80");
});