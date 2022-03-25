const UserController = require("./controllers/UserController");
const WorkshopController = require("./controllers/WorkshopController");
const PostController = require('./controllers/PostController')
const SchemeController = require('./controllers/SchemeController')
const CommentController = require('./controllers/CommentController')
const uploader = require("./utilities/uploader");
const auth = require("./middleware/auth");

module.exports = (app) => {
  app.get("/api/check", (req, res) => {
    res.json("Connected");
  });

  app.post("/api/user/register", UserController.registerUser);
  app.post("/api/user/login", UserController.loginUser);
  // app.post("/api/org/register", OrganizationController.registerOrganization);
  // app.post("/api/org/login", OrganizationController.loginOrganization);

  // app
  //   .route("/api/user/assistance")
  //   .post(auth.loginRequired, UserController.createAssistanceRequest)
    // .get(auth.loginRequired, UserController.getAssistanceRequest);

  app
    .route('/api/posts')
    .post(auth.loginRequired, PostController.createPost)
    .get(PostController.getAllPosts)
  
  app
    .route("/api/comments")
    .post(CommentController.addComment)
    // .get(äuth.loginRequired, CommentController.getComments)
  
  app
    .route("/api/comments/:id")
    .get(CommentController.getCommentsOfPost)

  app.get("/api/schemes", SchemeController.getSchemes);

  app
    .route("/api/workshops")
    .get(WorkshopController.getAllWorkshops)
    .post(WorkshopController.createWorkshop)
 
};
