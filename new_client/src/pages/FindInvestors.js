import { Grid,Heading, VStack, StackDivider } from "@chakra-ui/react";
import RightSidebar from "../components/RightSidebar";
import Navbar from "../components/Navbar";
import Card from "../components/UserCard";

const Workshop = () => {
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
        ><Heading>Connect with Investors</Heading>

        <Grid
        templateColumns='repeat(3, 1fr)' gap={3}
        >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Grid>
        </VStack>
        
        </Grid>
      </div>
    );
  };
  
  export default Workshop;
