const slugify= require('slugify');
const expressAsyncHandler = require('express-async-handler');
const categoryModel = require('../models/categoryModel');
const apiError = require('../utils/apiError');

// @desc get list of category
// @route GET api/v1/categories
// @access  public
exports.getCategories = expressAsyncHandler( async(req,res)=>{
       const page  = req.query.page  * 1 || 1;
       const limit = req.query.limit * 1 || 4;
       const skip  = (page - 1) * limit;
       const allCategories = await categoryModel.find({}).skip(skip).limit(limit);       
       res.status(200).json({ result:allCategories.length, page, data:allCategories });

});

// @desc get specific category by id
// @route GET api/v1/categories/:id
// @access  Public
exports.getCategory = expressAsyncHandler( async(req, res, next)=>{
    const {id} = req.params;
    const category = await categoryModel.findById(id);

    if(!category){
       // eslint-disable-next-line new-cap
       return next(new  apiError(`No Category for this id:${id}`, 404));
    }
        res.status(200).json({data:category});
    
});

// @desc    create category
// @route   POST api/v1/categories
// @access  Private
exports.creatCategory = expressAsyncHandler( async(req,res)=>{

    const name = req.body.name;
    const category = await categoryModel.create({ name:name , slug: slugify(name)});

    res.status(201).json({ data:category });

});



// @desc Update specific category 
// @route PUT api/v1/categories/:id
// @access  Private
// exports.updateCategory = expressAsyncHandler( async(req, res, next) => {
    
//     const  id  = req.params;
//     const name = req.body;

//     const category = await categoryModel.findOneAndUpdate(
//         {_id:id},
//         {name:name,slug:slugify(name)},
//         {new : true});

//     if(!category){
//         // eslint-disable-next-line new-cap
//         return next(new  apiError(`No Category for this id:${id}`, 404));
//     }
//         res.status(200).json({data:category});
// });

// @desc Delete specific category 
// @route DELETE api/v1/categories/:id
// @access  Private
exports.deleteCategory = expressAsyncHandler(async (req, res, next)=>{
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    if(!category){
        // eslint-disable-next-line new-cap
        return next(new  apiError(`No Category for this id:${id}`, 404));
    }

    res.status(204).send("delete success");
});