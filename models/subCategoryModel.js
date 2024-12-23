// const mongoose = require('mongoose');

// const subCategorySchema = new mongoose.Schema(
// {
//     name: {
//         type: String,
//         trim: true, //add string with out space if find space
//         unique: [true, 'subCategory must be unique'],
//         minlength: [2, 'Too short subCategory name'],
//         maxlength: [32, 'Too loong subCategory name']
//     },
//     slug: {
//         type: String,
//         lowercase : true
//     },
//     parentCategory: {
//         type: mongoose.Schema.ObjectId,
//         ref: 'Category',
//         required: [true, 'SubCategory must be belong to parent category'],
//     },    
// },
// { timestamps: true }
// );

// module.exports = mongoose.model('SubCategory',subCategorySchema);
