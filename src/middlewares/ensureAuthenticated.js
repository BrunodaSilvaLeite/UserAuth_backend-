const jsonwebtoken = require("jsonwebtoken");
const verify = jsonwebtoken.verify;

const hash = process.env.VALUE_HASH_JSONWEBTOKEN;

 function ensureAuthenticated(request, response, nextFunction) {
    const authtoken = request.headers.authorization;
  
    if (!authtoken) {
      return response.status(401).end();
    }
  
    const [, token] = authtoken.split(" ")
    try {
      const { sub } = verify(token, hash);
    
      request.user_id = sub;
  
      return nextFunction();
    } catch (err) {
      return response.status(401).end();
    }
}

module.exports = ensureAuthenticated;