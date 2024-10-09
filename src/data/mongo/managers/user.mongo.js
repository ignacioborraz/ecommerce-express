import User from "../models/user.model.js";

class UsersMongoManager {
    create = async (data) => {
      try {
        const one = await User.create(data);
        return one;
      } catch (error) {
        throw error;
      }
    };
    readAll = async (filter) => {
      try {
        const all = await User.find(filter);
        return all;
      } catch (error) {
        throw error;
      }
    };
    read = async (pid) => {
      try {
        const one = await User.findById(pid);
        return one;
      } catch (error) {
        throw error;
      }
    };
    update = async (pid, data) => {
      try {
        const opts = { new: true };
        const one = await User.findByIdAndUpdate(pid, data, opts);
        return one;
      } catch (error) {
        throw error;
      }
    };
    destroy = async (pid) => {
      try {
        const one = await User.findByIdAndDelete(pid);
        return one;
      } catch (error) {
        throw error;
      }
    };
  }

const usersMongoManager = new UsersMongoManager(User);
export default usersMongoManager;
