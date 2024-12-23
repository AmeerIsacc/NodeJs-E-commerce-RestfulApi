// const { check } = require('express-validator');
// const validatorMiddleware = require('../../middlewares/validtorMiddleware');

// exports.getSubCategoryValidator = [ 
//    check('id').isMongoId().withMessage('Invalid subcategory id formate'),
//    validatorMiddleware,
// ];

// exports.createSubCategroyValidator = [
//   check('name')
//     .notEmpty()
//     .withMessage('subCategory required')
//     .isLength({ min: 2 })
//     .withMessage('Too short subCategory name')
//     .isLength({ max: 32 })
//     .withMessage('Too long subCategory name'),
//   check('category').notEmpty().withMessage('subCategory must be belong to category'),
//     // .custom((val, { req }) => {
//     //   // eslint-disable-next-line no-undef
//     //   req.body.slug = slugify(val);
//     //   return true;
//     // }),
//   validatorMiddleware,
// ];

// exports.updateSubCategoryValdator  = [
//     check('id').isMongoId().withMessage('Invalid subCategory id formate'),
//     validatorMiddleware,
// ];

// exports.deleteSubCategoryValidator = [
//     check('id').isMongoId().withMessage('Invalid subCategory id formate'),
//     validatorMiddleware,
// ];