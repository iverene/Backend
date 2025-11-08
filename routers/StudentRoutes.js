import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const StudentRoutes = express.Router();

StudentRoutes.get('/all', StudentController.fetchStudent);

export default StudentRoutes;