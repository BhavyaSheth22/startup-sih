import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import LeftSidebar from "../components/LeftSidebar";

const Explore = () => {
  useEffect(() => {
    document.title = "OnlyUwU - Explore";
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
          isExplore={true}
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

export default Explore;
