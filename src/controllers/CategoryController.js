import db from "../models";
import MainController from "./main";
class CategoryController {
  static async index(req, res) {
    try {
      const { count, rows } = await db.Category.findAndCountAll({
        order: [["updatedAt", "DESC"]],
      });
      return res.status(200).json({ count, categories: rows });
    } catch (error) {
      return MainController.handleError(res, error);
    }
  }
}

export default CategoryController;
