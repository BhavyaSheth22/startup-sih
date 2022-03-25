import React, { useEffect, useState } from "react";
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
  AvatarBadge,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";
import { FaSun, FaMoon, FaUser, FaBell } from "react-icons/fa";
import { IoMdCreate } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const starOnGithub = () => {
    window.location.href = "https://github.com/VarunLanjhara/Bharatpreneur";
  };
  return (
    <Flex
      justifyContent={isMobile ? "" : "space-between"}
      alignItems="center"
      p={isMobile ? 2 : 4}
      position="sticky"
      top={0}
      zIndex="100"
      backgroundColor={colorMode === "light" ? "#ffffff" : "#1a202c"}
    >
      <Flex>
        <Heading
          color={colorMode === "light" ? "black" : "white"}
          size={isMobile ? "sm" : "xl"}
          fontFamily="Sansita Swashed"
        >
          Bharatpreneur
        </Heading>
      </Flex>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          setSearch("");
          navigate("/search/" + search);
        }}
      >
        <Tooltip label="Search shit" openDelay={400}>
          <InputGroup mx={isMobile ? 2 : 8} width={isMobile ? "40vw" : "50vw"}>
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search shit ..."
              variant="filled"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
          </InputGroup>
        </Tooltip>
      </form>
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
      <Popover>
        <PopoverTrigger>
          {/* <Tooltip label="Notifications" openDelay={400}> */}
          <IconButton icon={<FaBell />} aria-label="Notification" />
          {/* </Tooltip> */}
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Notifications!</PopoverHeader>
          <PopoverBody>
            You have no new notifications seems like no one love you.Star this
            project on github and everyone will start loving you
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Tooltip label="Create shit" openDelay={400}>
        <Button
          leftIcon={<IoMdCreate />}
          colorScheme="purple"
          variant="solid"
          borderRadius={24}
          padding={6}
          display={isMobile ? "none" : "flex"}
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </Button>
      </Tooltip>
      <Menu>
        <MenuButton>
          <Tooltip label="Idiot" openDelay={400}>
            <Avatar cursor="pointer" />
          </Tooltip>
        </MenuButton>
        <MenuList>
          <MenuItem
            gap="0.7rem"
            onClick={() => {
              navigate("/profile/lmao");
            }}
          >
            <FaUserCircle size="1.4rem" />
            Your profile
          </MenuItem>
          <MenuItem gap="0.7rem" onClick={starOnGithub}>
            <AiFillStar size="1.4rem" />
            Star on github
          </MenuItem>
          <MenuItem
            gap="0.7rem"
            onClick={() => {
              navigate("/login");
            }}
          >
            <IoLogOut size="1.4rem" />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Navbar;
