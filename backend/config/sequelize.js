module.exports = {
	logging: false,
	dialect: 'postgres',
	host: process.env.POSTGRES_HOST,
	define: { timestamps: false },
};
