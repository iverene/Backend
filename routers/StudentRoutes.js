import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const StudentRoutes = express.Router();

StudentRoutes.get('/all', StudentController.fetchStudent);
StudentRoutes.post('/new', StudentController.createStudent);
StudentRoutes.put('/edit/:studentId', StudentController.editStudent);
StudentRoutes.delete('/delete/:studentId', StudentController.deleteStudent);

export default StudentRoutes;