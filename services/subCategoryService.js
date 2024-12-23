// const slugify= require('slugify');
// const expressAsyncHandler = require('express-async-handler');
// const apiError = require('../utils/apiError');

// const subCategoryModel = require('../models/subCategoryModel');

// // @desc    create category
// // @route   POST api/v1/categories
// // @access  Private
// exports.creatsubCategory = expressAsyncHandler(async (req,res)=>{
//     const name = req.body;
//     const parentCategory = req.body;
//     const subCategory = await subCategoryModel.create({ 
//         name,
//         slug: slugify(name),
//         parentCategory
//     });
//     res.status(201).json({ data:subCategory });
// });


// // @desc get list of subcategory
// // @route GET api/v1/subcategories
// // @access  public
// exports.getSubCategories = expressAsyncHandler( async(req,res)=>{
//     const page  = req.query.page  * 1 || 1;
//     const limit = req.query.limit * 1 || 4;
//     const skip  = (page - 1) * limit;
//     const allCategories = await subCategoryModel.find({}).skip(skip).limit(limit);       
//     res.status(200).json({ result:allCategories.length, page, data:allCategories });

// });

// // @desc get specific subCategory by id
// // @route GET api/v1/subcategories/:id
// // @access  Public
// exports.getSubCategory = expressAsyncHandler( async(req, res, next)=>{
//  const {id} = req.params;
//  const subCategory = await subCategoryModel.findById(id);

//  if(!subCategory){
//     // eslint-disable-next-line new-cap
//     return next(new  apiError(`No subCategory for this id:${id}`, 404));
//  }
//      res.status(200).json({data:subCategory});
 
// });