import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useColorMode,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

const LoginNavbar = () => {
  useEffect(() => {
    document.title = "Bharatpreneur - Login";
  }, []);
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={4}
      position="sticky"
      top={0}
      zIndex="100"
      backgroundColor={colorMode === "light" ? "#ffffff" : "#1a202c"}
    >
      <Flex>
        <Heading
          color={colorMode === "light" ? "black" : "white"}
          size="xl"
          fontFamily="Sansita Swashed"
        >
          Bharatpreneur
        </Heading>
      </Flex>
      <Tooltip label="Search shit" openDelay={400}>
        <InputGroup mx={8} width="50vw">
          <InputLeftElement
            pointerEvents="none"
            children={<ImSearch color="gray.300" />}
          />
          <Input type="text" placeholder="Search shit ..." variant="filled" />
        </InputGroup>
      </Tooltip>
      {colorMode === "light" ? (
        <Tooltip label="Dark mode" openDelay={400}>
          <IconButton
            icon={<FaMoon />}
            aria-label="Dark mode"
            onClick={() => {
              toggleColorMode();
            }}
          />
        </Tooltip>
      ) : (
        <Tooltip label="Light mode" openDelay={400}>
          <IconButton
            icon={<FaSun />}
            aria-label="Light mode"
            onClick={() => {
              toggleColorMode();
            }}
          />
        </Tooltip>
      )}
      <Tooltip label="Lets gooo bitch" openDelay={400}>
        <Button
          leftIcon={<AiOutlineFire />}
          colorScheme="purple"
          variant="solid"
          borderRadius={24}
          padding={6}
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
  );
};

export default LoginNavbar;
