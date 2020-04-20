import '@babel/polyfill';
import express from 'express';
import ip from 'express-ip';
import cors from 'cors';
import routers from './routes';
import dotenv from 'dotenv';
import AdminBro from 'admin-bro';
import AdminBroExpress from 'admin-bro-expressjs';
import AdminBroSequelize from 'admin-bro-sequelizejs';
import adminBroConfig from './adminBroConfig';
import formidableMiddleware from 'express-formidable';
import authenticate from './middlewares/auth';
dotenv.config();
const { COOKIE_NAME, COOKIE_PASSWORD } = process.env;

AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
	...adminBroConfig,
	// rootPath: '/',
});
const app = express();
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
	authenticate: async (email, password) => authenticate(email, password),
	cookiePassword: COOKIE_PASSWORD,
	cookieName: COOKIE_NAME,
});
app.use(adminBro.options.rootPath, router);
app.use(cors());
app.use(express.json());
app.use(ip().getIpInfoMiddleware);
app.use(routers);
app.get('/', (req, res) => {
	res.redirect('/admin')
})
app.use('*', (req, res) =>
	res.status(404).json({
		message: 'API endpoint not found!',
	})
);
export default app;
