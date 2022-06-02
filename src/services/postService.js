const { BlogPost, User, Category } = require('../database/models');
// postService.js
const getPosts = async () => {
  const getPostsAll = await BlogPost.findAll({ include: [
    { 
      model: User, 
      as: 'user', // meu userProgredindo não foi :c
      required: false, 
      attributes: { exclude: ['password'] }, 
    },
    { 
      model: Category,
      as: 'category',
      through: { attributes: [] },
    }] });
   return getPostsAll; 
};

const getPostId = async (id) => {
  const postData = await BlogPost.findOne({ where: { id }, 
    include: [
    { 
      model: User, 
      as: 'user', 
      attributes: { exclude: ['password'] } },
    { 
      model: Category, 
      as: 'category', 
      through: { attributes: [] } },
  ] });
  if (!postData) return false;
  return postData;
};

module.exports = {
  getPosts,
  getPostId,
};  
