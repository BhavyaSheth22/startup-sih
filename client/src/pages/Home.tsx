import { Grid, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSidebar";

const Home = () => {
  const toast = useToast();
  useEffect(() => {
    document.title = "OnlyUwU";
  }, []);
  useEffect(() => {
    toast({
      title: "Warning for some idiots",
      description:
        "I have already said that the backend is not implemented yet, hence functionality of any kind such as creating posts, liking or commenting do not work yet. That said, do not dm me saying hey painman, i cant create posts, but do let me know if any kind of UI component is missing or not correct. Thanks!",
      status: "warning",
      duration: 15000,
      isClosable: true,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        gridTemplateColumns="22vw auto 24vw"
        columnGap="2rem"
        marginLeft="1rem"
        marginRight="1rem"
      >
        <RightSidebar />
        <Feed
          isExplore={false}
          isLibrary={false}
          isYourPosts={false}
          isSearch={false}
          isProfile={false}
          isFollower={false}
        />
        <LeftSidebar />
      </Grid>
    </div>
  );
};

export default Home;
