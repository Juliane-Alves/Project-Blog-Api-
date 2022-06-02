const postService = require('../services/postService');

const getPosts = async (req, res) => {
    const postData = await postService.getPosts(); 
    return res.status(200).json(postData); 
};

const getPostId = async (req, res) => {
  const { id } = req.params;
  const postData = await postService.getPostId(id);
  
  if (!postData) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(postData);
};

  module.exports = {
    getPosts,
    getPostId,
  };
