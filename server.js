var express = require('express');
var http    = require('http');

var app = express();

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

app.use(express.static(__dirname + '/'));

var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
  console.log('the server is running on port', app.get('port'));
});