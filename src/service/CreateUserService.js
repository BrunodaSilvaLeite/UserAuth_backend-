const UserModel = require("../models/User");
const bcryptjs = require("bcryptjs");
const hash = bcryptjs.hash;

class CreateUserService {
  async execute(name, email, password) {     
    const UserExists = await UserModel.findOne({email});
    
    if(UserExists) {
        throw new Error("User already exists 🚧")
    }
    const passwordHash = await hash(password, 8)
    const user = await UserModel.create({name, email, password:passwordHash});

    return user;
  }
}

module.exports = new CreateUserService();
