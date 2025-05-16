require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/user');
const eventsRoutes = require('./routes/event');
const registrationsRoutes = require('./routes/registgration');
const commentsRoutes = require('./routes/comment');
const ratingsRoutes = require('./routes/rating');
const rolesRoutes = require('./routes/role');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// app.use(express.static(path.resolve(__dirname, 'frontend/dist')));
app.use(express.static('../frontend/dist'));

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/registrations', registrationsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/ratings', ratingsRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

app.use((req, res, next) => {
	if (req.originalUrl.startsWith('/api/')) {
		return next();
	}
	res.sendFile(path.resolve(__dirname, '..', 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
