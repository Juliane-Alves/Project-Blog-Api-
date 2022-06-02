const { BlogPost, User, Category } = require('../database/models');
// postService.js
const getPosts = async () => {
  const getPostsAll = await BlogPost.findAll({ include: [
    { 
      model: User, 
      as: 'user', // meu userProgredindo não foi :c
      // required: false, 
      attributes: { exclude: ['password'] }, 
    },
    { 
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }] });
   return getPostsAll; 
};
const erro = { status: 404, message: 'Post does not exist' };
const getPostId = async (id) => {
  const postData = await BlogPost.findByPk(id, {
    include: [
    { 
      model: User, 
      as: 'user', 
      attributes: { exclude: ['password'] } },
    { 
      model: Category, 
      as: 'categories', 
      through: { attributes: [] } },
  ] });
  if (postData === null) throw erro;
  return postData;
};

module.exports = {
  getPosts,
  getPostId,
};  
