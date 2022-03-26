const {Post} = require("../models/Post");

exports.createPost = async (req, res, next) => {
    try {
      const {title,image,text,userId} = req.body;
      console.log(req.body);
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

        const posts = await Post.find().populate({ path: 'comments' , populate:{ path: 'user' }}).populate('poster').exec();
        console.log(posts);
        let category=[];
        for (let i = 0; i < posts.length; i++) {
         category.push(posts[i].category);
        }
        console.log(category);

        // const response = await axios.post(
        //   "http://b3d4-2405-204-287-dba-7975-4dc3-4c21-bf35.ngrok.io/predict",
        //   {
        //     user_id:req.body.userId,
        //     postCategory:category
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "application/json"
        //     }
        //   }
        // );
        // console.log(response);
       
        // await Post.findAndUpdate({
        //   $push: { displayRank:response}
        // });
      
        res.status(200).json({data: posts, message: 'all posts'});
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
}