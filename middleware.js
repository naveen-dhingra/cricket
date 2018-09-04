const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

// session support is required to use ExpressOIDC
app.use(session({
  secret: '1b5X_CJwBRLMn_9rpsRY_BCLfb0ArHnO_0DoYpxm',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: 'https://dev-214949.oktapreview.com/oauth2/default',
  client_id: '0oafvrpewmArPfj6g0h7',
  client_secret: '1b5X_CJwBRLMn_9rpsRY_BCLfb0ArHnO_0DoYpxm',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile'
});

//Starting server
oidc.on('ready', () => {
    app.listen(3000, () => console.log(`Started!`));
  });
  
  oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
  });

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);