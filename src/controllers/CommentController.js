import MainController from './main';
import db from '../models';
import { validateComment } from '../utils/validator';
import { paginate } from '../utils/queryHelper';
class CommentController {
	static async index(req, res) {
		try {
			const { limit, page } = req.query;
			const { postId } = req.params;
			const { count, rows: comments } = await db.Comment.findAndCountAll({
				where: {
					postId,
				},
				order: [['updatedAt', 'DESC']],
				...paginate({ page, limit }),
			});
			return res.status(200).json({ count, comments });
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
	static async create(req, res) {
		try {
			const { username, content } = req.body;
			const { postId } = req.params;
			await validateComment.validateAsync({ username, content });
			const data = await db.Comment.create({ username, content, postId });
			return res.status(201).json({ data });
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
}

export default CommentController;
