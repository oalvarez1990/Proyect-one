
const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const Transfer = db.define('transfers', {
    id: { 
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER , 
        unique: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER , 
        unique: false,
        allowNull: false
    },
    senderUserId:{
        type: DataTypes.INTEGER ,
        allowNull: false

    },
    receiverUserId:{
        type: DataTypes.INTEGER , 
        allowNull: false
    }    
})

module.exports = {Transfer}
//endopoint transfer in other count

// const express = require('express');

// // Middlewares
// const { protectToken } = require('../middlewares/users.middlewares');
// const { commentExists } = require('../middlewares/comments.middlewares');
// const {
//   createCommentValidations,
//   checkValidations,
// } = require('../middlewares/validations.middlewares');

// // Controllers
// const {
//   getAllComments,
//   createComment,
//   getCommentById,
//   updateComment,
//   deleteComment,
// } = require('../controllers/comments.controller');

// const router = express.Router();

// router.use(protectToken);

// // GET / Get all comments
// router.get('/', getAllComments);

// // POST /:postId Create comment
// router.post(
//   '/:postId',
//   createCommentValidations,
//   checkValidations,
//   createComment
// );

// // GET /:id Get comment by id
// // PATCH /:id Update comment
// // DELETE /:id Delete comment (status = 'deleted')
// router
//   .use('/:id', commentExists)
//   .route('/:id')
//   .get(getCommentById)
//   .patch(updateComment)
//   .delete(deleteComment);

// module.exports = { commentsRouter: router };