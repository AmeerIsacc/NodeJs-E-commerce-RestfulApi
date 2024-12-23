const express  = require('express');
const dotenv   = require('dotenv');
const morgan   = require('morgan');


dotenv.config({ path: 'config.env' });
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errorMiddleware');
const dbConnection  = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');
//const subCategoryRout = require('./routes/subCategoryRout');


//db connection
dbConnection();

// express app
const app = express();    

//Middlewares
app.use(express.json());

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
    console.log(`Mode is : ${process.env.NODE_ENV}`);
}

//Routes
app.use('/api/v1/categories',categoryRoute);

//app.use('/api/v1/subCategories',subCategoryRout);

app.all("*", (req, res, next)=>{
    //Create error and send it to error handling
    next(new ApiError(`Can,t find this route: ${req.originalUrl}`, 400));
});

//Global Erroe handling middleware
app.use(globalError);
    
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT,()=>{
    console.log(`App running on port ${PORT}`);
});
// handle rejections out side express
process.on('unhandledRejection', (err)=>{
    console.error(`unhandledRejection: ${err.name} | ${err.message}`);
    server.close(()=>{
        console.error('shutting down...');
       process.exit(1);
    });
});