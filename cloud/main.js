require('cloud/app.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

var Mailgun = require('mailgun');
Mailgun.initialize('sandboxc443a858bd5c4fe3a9ea2af18f38956e.mailgun.org', 'key-843c638b561552eef76475835c5a25d4');

Parse.Cloud.define("email", function(request, response) {
  Mailgun.sendEmail({
    to: "jan.kronquist@gmail.com",
    from: "Mailgun@CloudCode.com",
    subject: "Hello from Cloud Code!",
    text: "Using Parse and Mailgun is great!"
  }, {
    success: function(httpResponse) {
      console.log(httpResponse);
      response.success("Email sent!");
    },
    error: function(httpResponse) {
      console.error(httpResponse);
      response.error("Uh oh, something went wrong");
    }
  });
});

