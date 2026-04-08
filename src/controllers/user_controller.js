const Users = require('../models/user');

class UserController {
  static index(req, res) {
    return Users;
  }

  static show(req, res) {
    return Users[req.params.id];
  }

  static create(req, res) {
    const { name, age } = req.body;
    let author = {
      name: name,
      age: age,
    };

    Users[Users.last + 1] = author;
    Users.last += 1;

    return author;
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;

    let User = Object(Users[id]);
    if (name !== undefined) User.name = name;
    if (age !== undefined) User.age = age;

    Users[id] = User;
    return User;
  }

  static delete(req, res) {
    const { id } = req.params;
    Users[id] = null;

    return { success: true };
  }
}

module.exports = UserController;
