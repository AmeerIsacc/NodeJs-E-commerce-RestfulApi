const { check }= require('express-validator');
const validatorMiddleware = require('../../middlewares/validtorMiddleware');

exports.getCategoryValidator =[ 
   check('id').isMongoId().withMessage('Invalid category id formate'),
   validatorMiddleware,
];

exports.createCategroyValidator = [
    check('name')
    .notEmpty()
    .withMessage('Category required')
    .isLength({ min: 3 })
    .withMessage('Too short category name')
    .isLength({ max: 32 })
    .withMessage('Too long category name')
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  validatorMiddleware,
];

exports.updateCategoryValdator  = [
    check('id').isMongoId().withMessage('Invalid category id formate'),
    validatorMiddleware,
];

exports.deleteCategoryValidator = [
    check('id').isMongoId().withMessage('Invalid category id formate'),
    validatorMiddleware,
];