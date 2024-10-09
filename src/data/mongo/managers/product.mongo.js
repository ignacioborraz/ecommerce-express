import Product from "../models/product.model.js";

class ProductsMongoManager {
  create = async (data) => {
    try {
      const one = await Product.create(data);
      return one;
    } catch (error) {
      throw error;
    }
  };
  readAll = async (filter) => {
    try {
      const all = await Product.find(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };
  read = async (pid) => {
    try {
      const one = await Product.findById(pid);
      return one;
    } catch (error) {
      throw error;
    }
  };
  update = async (pid, data) => {
    try {
      const opts = { new: true };
      const one = await Product.findByIdAndUpdate(pid, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };
  destroy = async (pid) => {
    try {
      const one = await Product.findByIdAndDelete(pid);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

const productsMongoManager = new ProductsMongoManager(Product);
export default productsMongoManager;
