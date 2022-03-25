const {Post} = require("../models/Post");

exports.createPost = async (req, res, next) => {
    try {
      const {title,image,text,userId} = req.body;
      const createPostData = await Post.create({
        title,
        text,
        photoUrl:image,
        poster: userId
      })

      res.status(201).json({ data: createPostData, message: 'created' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

exports.getAllPosts = async (req, res, next) => {
    try{
        const posts = await Post.find().populate('comments').populate('poster');
        console.log(posts);
        res.status(200).json({data: posts, message: 'all posts'});
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}