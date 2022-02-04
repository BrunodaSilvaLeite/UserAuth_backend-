const AuthenticationUserService = require('../service/AuthenticateUserService');

class AuthenticationUserController {
    async handle(req, res) {
        const {email, password} = req.body;
        
        const token = await AuthenticationUserService.execute(email, password);

        return res.json(token)
    }
}

module.exports = new AuthenticationUserController;