const { Post, Comment } = require("../models/Post");

exports.addComment = async (req, res) => {
    try {
        const newComment = new Comment({...req.body});
        await newComment.save();
        // const createCommentData = await Comment.create({ ...new })

        // const post = await Post.findById(req.body.post);
        await Post.findByIdAndUpdate(req.body.post, { $push: {comments: newComment} });

        let finalComment = await Comment.findById(newComment._id).populate('post').populate('user');
  
        res.status(201).json({ data: finalComment, message: 'created' });
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
};

exports.getCommentsOfPost = async (req, res) => {
    try {
        const posts = await Comment.find({ post: req.params.id }).populate('user');

        res.status(201).json({ data: posts, message: 'found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
