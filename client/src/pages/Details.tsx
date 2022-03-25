import { Grid } from "@chakra-ui/react";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Details from "../components/Details";
import React, { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
      document.title = "Bharatpreneur - Idiot";
    }, []);
    return (
      <div>
        <Navbar />
        <Grid
          gridTemplateColumns="22vw auto"
          columnGap="2rem"
          marginLeft="1rem"
          marginRight="1rem"
        >
        <RightSidebar/>
        <Details/>
        </Grid>
      </div>
    );
  };
  
  export default Profile;
