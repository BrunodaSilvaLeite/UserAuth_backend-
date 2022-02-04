const CreateUserService = require("../service/CreateUserService");

class CreateUserController {
  async handle(req, res) {
    const UserService = CreateUserService;
    const { name, email, password } = req.body;
    const user = await UserService.execute(name, email, password);

    return res.json(user);
  }
}

module.exports = new CreateUserController();
