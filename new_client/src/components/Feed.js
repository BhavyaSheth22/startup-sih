import { Avatar, Divider, Flex, Heading, Tag, Tooltip } from "@chakra-ui/react";
import PostsApi from "../utils/Api/Post";
import React, { useEffect, useState } from "react";
import Post from "./Post";


const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // let posts;

  useEffect(() => {
    const init = async () => {
      const post = await PostsApi.getAllPosts();
      setPosts(post.data.data);
      // console.log(posts);

      setLoading(false);
      // console.log(post.data.data);
    };

    init();
  }, []);

  const comments = [{
    text: "This is first comment",
    user: {
      name: "Palak Mantry"
    }
  }];

  return (
    isLoading
    ? <> Hello </>
    :
    <Flex
      flexDirection="column"
      gap="1rem"
      width="100%"
      position="sticky"
      top="5.4rem"
      height="max-content"
    >
      <Flex gap="1rem" width="100%" flexWrap="wrap">
        <Tag>Fintech</Tag>
        <Tag>Technology</Tag>
        <Tag>Health</Tag>
        <Tag>Finance</Tag>
      </Flex>
      {
        posts.map((post) => {
          return (<Post title={post.title} text={post.text} poster={post.poster} comments={post.comments} key={post._id}/>)
        })
      }
    </Flex>
  );
};


export default Feed;
