import express from "express";
import 'dotenv/config.js';
import bookRoutes from './routers/BookRoutes.js';
import studentRoutes from './routers/StudentRoutes.js';
import cors from 'cors';

//create express app
const app = express();

// Enable CORS
let corseOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corseOptions));

// Console log
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

const port = 3000;

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log('Listening to port 5000...')
    });
} catch (e) {
    console.log(e);
}

app.use('/book', bookRoutes);
app.use('/student', studentRoutes);