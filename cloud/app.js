
// These two lines are required to initialize Express in Cloud Code.
 express = require('express');
 app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// This is an example of hooking up a request handler with a specific request
// path and HTTP verb using the Express routing API.
app.get('/hello', function(req, res) {
  var Journey = Parse.Object.extend("Journey");
  var j = new Journey();
  j.save({
    name: "Sean Plott"
  }, {
    success: function(r) {
      res.render('hello', { message: 'success: ' + JSON.stringify(r) });
    },
    error: function(r, error) {
      res.render('hello', { message: 'fail: ' + error });
    }
  });
});

app.get('/createTrip', function(req, res) {
  res.render('createTripForm', { });
});

app.get('/user', function(req, res) {
  var currentUser = Parse.User.current();
  if (currentUser) {
    res.render('hello', { message: 'user: ' + currentUser });
  } else {
    res.render('hello', { message: 'no user: '});
  }
});


// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// Attach the Express app to Cloud Code.
app.listen();
