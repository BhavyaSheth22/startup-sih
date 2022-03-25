import { Grid,Heading, VStack, StackDivider } from "@chakra-ui/react";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar.js";
import Card from "../components/SchemesCard";
import { useEffect } from "react";
import {schemes} from "./schemes";

const Workshop = () => {
    useEffect(() => {
      document.title = "Connect";
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
        <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        ><Heading>Government Schemes</Heading>

        <Grid
        templateColumns='repeat(3, 1fr)' gap={3}
        >
        {schemes.map((scheme)=>(
            <Card title={scheme.title} description={scheme.description} tagName={scheme.tagName} path={scheme.path}/>
            // <div>{scheme.title}</div>
        ))}
        </Grid>
        </VStack>
        
        </Grid>
      </div>
    );
  };
  
  export default Workshop;
