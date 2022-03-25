import React from "react";
import LoginNavbar from "../components/LoginNavbar";
import {
  Button,
  Flex,
  Heading,
  Image,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineFire } from "react-icons/ai";

const Login = () => {
  const toast = useToast();
  return (
    <Flex overflow="hidden" flexDirection="column" height="100vh" width="100vw">
      <LoginNavbar />
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="73vh"
        overflow="hidden"
      >
        <Flex flexDirection="column" gap="1.4rem">
          <Flex flexDirection="column" alignItems="center">
            <Heading as="h4" size="xl">
              Make fwends with
            </Heading>
            <Heading as="h4" size="xl">
              
            </Heading>
          </Flex>
          <Tooltip label="Lets gooo bitch" openDelay={400}>
            <Button
              leftIcon={<AiOutlineFire />}
              colorScheme="purple"
              variant="solid"
              borderRadius={24}
              size="lg"
              onClick={() => {
                toast({
                  title: "Not implemented yet.",
                  description: "Painman working on it so plz be patient.",
                  status: "warning",
                  duration: 6900,
                  isClosable: true,
                });
              }}
            >
              Get started
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
