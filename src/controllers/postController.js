const postService = require('../services/postService');

const getPosts = async (req, res) => {
    const postData = await postService.getPosts(); 
    return res.status(200).json(postData); 
};

const getPostId = async (req, res, next) => {
  try {
    const { id } = req.params;
  const postData = await postService.getPostId(id);
  return res.status(200).json(postData);
  } catch (error) {
    next(error);
  }
};

  module.exports = {
    getPosts,
    getPostId,
  };
