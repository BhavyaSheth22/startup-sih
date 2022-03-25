import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar.js";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import ProfileSidebar from "../components/ProfileSidebar";

const Profile = () => {
  useEffect(() => {
    document.title = "OnlyUwU - Idiot";
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
          isProfile={true}
          isFollower={false}
        />
        <ProfileSidebar />
      </Grid>
    </div>
  );
};

export default Profile;
