import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar.js";
import RightSidebar from "../components/RightSidebar";
import CreateComponent from "../components/CreateComponent";
import CreateComponent2 from "../components/CreateWorkshop";

const Create = () => {
  useEffect(() => {
    document.title = "Bharatpreneur - Create post";
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
        <CreateComponent />
        <CreateComponent2 />

        {/* <LeftSidebar /> */}
      </Grid>
    </div>
  );
};

export default Create;
