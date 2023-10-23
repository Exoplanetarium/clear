const admin = require('./firebaseAdminSetup');

const verifyToken = (req, res, next) => {
  const idToken = req.headers.authorization;

  admin.auth().verifyIdToken(idToken)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      res.status(401).send('Unauthorized');
    });
}

module.exports = verifyToken;
