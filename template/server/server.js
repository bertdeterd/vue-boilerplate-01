const express = require('express');
const passport = require('passport');
const xsenv = require('@sap/xsenv');
const oauth = require('oauth');
const path = require('path');
const JWTStrategy = require('@sap/xssec').JWTStrategy;
var sapapi = require('./routes/mysap');

const app = express();

const services = xsenv.getServices({uaa: {tag:'xsuaa'}});

passport.use(new JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', { session: false }));

app.use('/', express.static(path.join(__dirname, 'dist')));

app.use('/api', sapapi);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});