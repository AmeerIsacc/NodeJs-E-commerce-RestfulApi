const express = require('express');
const { 
   getCategoryValidator,
   createCategoryValidator,
   updateCategoryValidator,
   deleteCategoryValidator,   
 } = require('../utils/validators/categoryValidtor');

const {
    getCategories,
    creatCategory,
    getCategory,
    updateCategory,
    deleteCategory
} = require('../services/categoryService');

const router = express.Router();

router.route('/').post(createCategoryValidator,creatCategory);
router.route('/').get(getCategories);   
router.route('/:id').get(getCategoryValidator,getCategory);
//router.route('/:id').put(updateCategoryValidator,updateCategory);
router.route('/:id').delete(deleteCategoryValidator,deleteCategory);

module.exports = router;