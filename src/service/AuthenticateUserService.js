const UserModel = require("../models/User");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const compare = bcryptjs.compare;
const sign = jsonwebtoken.sign;

const hash = process.env.VALUE_HASH_JSONWEBTOKEN;

class AuthenticationUserService {
  async execute(email, password) {
    const User = await UserModel.findOne({ email });

    if (!User) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, User.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }
    const token = sign(
      {
        email: User.email,
      },
      hash,
      {
        subject: User.id,
        expiresIn: "1h",
      }
    );

    return token;
  }
}

module.exports = new AuthenticationUserService();
