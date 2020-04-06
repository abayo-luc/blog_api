import db from '../models';
import bcrypt from 'bcrypt';
const { User } = db;
export default async (email, password) => {
	try {
		const user = await User.findOne({ where: { email } });
		if (user) {
			const matched = await bcrypt.compare(password, user.password);
			if (matched) {
				return user;
			}
		}
		return false;
	} catch (error) {
		return false;
	}
};
