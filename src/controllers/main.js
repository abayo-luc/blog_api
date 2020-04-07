import { isEmpty } from 'lodash';
import { UNIQUE_VIOLATION, INVALID_UUID } from '../utils/constants';
import joiError from '../utils/joiError';

class MainController {
	static handleFind(res, data) {
		if (isEmpty(data)) {
			return res.status(404).json({
				error: {
					message: 'Record not found',
				},
			});
		}
		return res.status(200).json({ data });
	}

	static async handleError(res, err) {
		const error = {};
		if (err.isJoi) {
			const response = await joiError(err);
			return res.status(400).json({ error: response });
		}
		if (isEmpty(err?.errors)) {
			error.message = err?.message.includes(INVALID_UUID)
				? 'Invalid id'
				: err.message || 'Bad request';
			return res.status(400).json({ error });
		}
		err.errors.forEach((element) => {
			const { path, message, type } = element;
			switch (type) {
				case UNIQUE_VIOLATION:
					error[path] = `${path} is already taken`.replace(/^\w/, (c) =>
						c.toUpperCase()
					);
					break;
				default:
					error[path] = message.replace(/^\w/, (c) => c.toUpperCase());
					break;
			}
		});
		return res.status(400).json({ error });
	}
}
export default MainController;
