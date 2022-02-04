<p align = "center" >
  <h1 align="center">Auth user 🔒️</h1>
</p>

<p align="center">
  <a href="#-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-How to Run">How to Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-How to contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-License">License</a>
</p>

## 🚀 Technologies
This project was developed with:
- Javascript
- NodeJs
- Express
- Mongoose
- Mongodb
- Bcryptjs
- Jsonwebtoken

## 🧑‍💻 Project
The "Auth user" project 🔒️, is a simple project that creates users, authenticates users, and secures routes with token verification middleware.
This is a project with the intention of exercising Backend skills with NodeJs.

This project has two routes of the Post method, where one creates the users and the other authenticates. The part of protecting a route is done with a middleware. This middleware receives the token through the "Bearer Token", selected through the jsonwebtoken and returning if it is authorized or not.

## 🏃 How to Run
- Make a fork;
- Open the project on your terminal;
- Run `yarn install` or `npm install` to install Dependencies;
- Run `yarn start` or `npm run start` to run the server;
- By default the server will run at `localhost:3000`.

## 🤔 How to contribute
- Make a fork;
- Create a branch with your feature: `git checkout -b my-feature`;
- Do commit with your changes: `git commit -m 'feat: My new feature'`;
- Do a push for your branch: `git push origin my-feature`.

After the merge of your pull request was made, you can delete your branch.

## :memo:License

This project is under License MIT. See the documentation [LICENSE](LICENSE) for more details.
