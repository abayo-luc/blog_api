import MainController from './main';
import db from '../models';
import { textSearch, paginate } from '../utils/queryHelper';
class PostController {
	static async index(req, res) {
		try {
			const { search, limit, page } = req.query;
			const { count, rows: users } = await db.User.findAndCountAll({
				where: {
					...textSearch(search, ['email', 'firstName', 'lastName']),
				},
				order: [['updatedAt', 'DESC']],
				...paginate({ page, limit }),
			});
			return res.status(200).json({ count, users });
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
	static async find(req, res) {
		try {
			const { id } = req.params;
			const data = await db.User.findByPk(id);
			return MainController.handleFind(res, data);
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
}

export default PostController;
