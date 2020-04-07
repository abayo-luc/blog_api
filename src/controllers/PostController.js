import MainController from './main';
import db from '../models';
import { textSearch, paginate } from '../utils/queryHelper';
class PostController {
	static async index(req, res) {
		try {
			const { search, limit, page } = req.query;
			const { count, rows: posts } = await db.Post.findAndCountAll({
				where: {
					...textSearch(search, ['title', 'content']),
				},
				order: [['updatedAt', 'DESC']],
				...paginate({ page, limit }),
				include: [
					{
						model: db.User,
						as: 'author',
					},
					{
						model: db.Comment,
						as: 'comments',
					},
					{
						model: db.Category,
						as: 'category',
					},
				],
			});
			return res.status(200).json({ count, posts });
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
	static async find(req, res) {
		try {
			const { id } = req.params;
			const data = await db.Post.findByPk(id, {
				include: [
					{
						model: db.User,
						as: 'author',
						attributes: ['id', 'firstName', 'lastName', 'avatar'],
					},
					{
						model: db.Comment,
						as: 'comments',
						attributes: ['id', 'content', 'username'],
					},
					{
						model: db.Category,
						as: 'category',
						attributes: ['id', 'name'],
					},
				],
			});
			return MainController.handleFind(res, data);
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
}

export default PostController;
