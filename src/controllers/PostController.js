import { Op } from 'sequelize';
import moment from 'moment';
import MainController from './main';
import db from '../models';
import { textSearch, paginate } from '../utils/queryHelper';
import { validateView } from '../utils/validator';
const associated = [
	{
		model: db.User,
		as: 'author',
		attributes: ['id', 'firstName', 'lastName', 'avatar'],
	},
	{
		model: db.Comment,
		as: 'comments',
		attributes: ['id', 'content', 'username', 'createdAt'],
	},
	{
		model: db.Category,
		as: 'category',
		attributes: ['id', 'name'],
	},
	{
		model: db.PostView,
		as: 'views',
		attributes: ['id', 'country'],
	},
];
class PostController {
	static async index(req, res) {
		try {
			const {
				search,
				limit,
				page,
				category,
				year = new Date().getFullYear(),
			} = req.query;

			const searchWhere = {
				...textSearch(search, ['title', 'content']),
			};
			if (category) searchWhere.categoryId = category;
			const { count, rows: posts } = await db.Post.findAndCountAll({
				where: {
					$and: [
						{
							createdAt: {
								[Op.gte]: moment([year]).startOf('year').format('YYYY-MM-DD'),
								[Op.lt]: moment([year]).endOf('year').format('YYYY-MM-DD'),
							},
						},
						searchWhere,
					],
				},
				order: [['updatedAt', 'DESC']],
				...paginate({ page, limit }),
				include: associated,
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
				include: associated,
			});
			return MainController.handleFind(res, data);
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
	static async addView(req, res) {
		try {
			const { country, city } = req.ipInfo;
			const { id: postId } = req.params;
			await validateView.validateAsync({ country, postId });
			const data = await db.PostView.create({
				postId,
				country,
				city,
			});
			return MainController.handleFind(res, data);
		} catch (error) {
			return MainController.handleError(res, error);
		}
	}
}

export default PostController;
