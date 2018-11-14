module.exports = {

  sessionSecret: process.env.SESSION_SECRET,

  // facebook: {
  //   clientID: process.env.FACEBOOK_ID,
  //   clientSecret: process.env.FACEBOOK_SECRET,
  //   callbackURL: '/auth/facebook/callback',
  //   passReqToCallback: true
  // },

  // github: {
  //   clientID: process.env.GITHUB_ID,
  //   clientSecret: process.env.GITHUB_SECRET,
  //   callbackURL: '/auth/github/callback',
  //   passReqToCallback: true
  // },

  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    token: process.env.TWITTER_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  // slackHook: process.env.SLACK_WEBHOOK,

  // cookieSecret: process.env.COOKIE_SECRET,

  // stripe: {
  //   public: process.env.STRIPE_PUBLIC,
  //   secret: process.env.STRIPE_SECRET
  // }
};