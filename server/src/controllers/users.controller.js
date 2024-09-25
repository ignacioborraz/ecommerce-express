import usersManager from '../data/users.manager.js';

const registerView = async (req, res, next)=> {
  try {
    const users = await usersManager.readAll()
    return res.render("register", { users })
  } catch (error) {
    return next(error)
  }
}

export { registerView }