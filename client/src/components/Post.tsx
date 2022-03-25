import React from "react";
import { Flex, Heading, Avatar, IconButton, Image } from "@chakra-ui/react";
import { BiDotsVerticalRounded, BiCommentDetail } from "react-icons/bi";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";

const Post = () => {
  return (
    <Flex
      flexDirection="column"
      padding="1rem"
      width="100%"
      boxShadow="lg"
      borderRadius="md"
      gap="1rem"
      marginBottom="0.7rem"
    >
      <Flex flexDirection="row" width="100%" alignItems="center">
        <Avatar cursor="pointer" />
        <Flex
          flexDirection="column"
          width="100%"
          marginLeft="1rem"
          gap="0.2rem"
        >
          <Heading as="h3" size="md">
            Varun
          </Heading>
          <Heading as="h4" size="sm" color="gray.600">
            2 hours ago
          </Heading>
        </Flex>
        <IconButton
          icon={<BiDotsVerticalRounded size="1.6rem" />}
          aria-label="Shit"
        />
      </Flex>
      <Image src="/catboi.jpeg" alt="" borderRadius="lg" />
      <Heading as="h5" size="sm">
        I am dumb piece of shit help god lets gooooo I am dumb piece of shit
        help god lets gooooo I am dumb piece of shit help god lets gooooo I am
        dumb piece of shit help god lets gooooo I am dumb piece of shit help god
        lets gooooo
      </Heading>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap="1.3rem">
          <Flex alignItems="center" gap="0.4rem">
            <IconButton aria-label="Like" isRound={true}>
              <BsHeart size="1.5rem" cursor="pointer" />
            </IconButton>
            <Heading as="h5" size="sm" color="gray.600">
              0
            </Heading>
          </Flex>
          <Flex alignItems="center" gap="0.4rem">
            <IconButton aria-label="Comment" isRound={true}>
              <BiCommentDetail size="1.5rem" cursor="pointer" />
            </IconButton>
            <Heading as="h5" size="sm" color="gray.600">
              0
            </Heading>
          </Flex>
          <Flex alignItems="center" gap="0.4rem">
          <IconButton aria-label="Comment" isRound={true}>
            <MdOutlineReportProblem size="1.5rem" cursor="pointer" />
            </IconButton>
          </Flex>
        </Flex>
        <IconButton aria-label="Comment" isRound={true}>
        <BsBookmark size="1.5rem" cursor="pointer" />
        </IconButton>
      </Flex>
      <Heading
        as="h5"
        size="sm"
        color="gray.500"
        cursor="pointer"
        _hover={{
          textDecorationLine: "underline",
        }}
      >
        View all comments
      </Heading>
    </Flex>
  );
};

export default Post;
