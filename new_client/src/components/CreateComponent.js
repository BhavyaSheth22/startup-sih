import React, { useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BsImageFill } from "react-icons/bs";
import Api, { responseErrorHandler } from "../utils/Api/Api";
import { toast } from "react-toastify";
import { getUserId } from "../utils/jwtUtil";

const CreateComponent = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const userId = getUserId();
  // const toast = useToast();

  const createPost = async()=>{
    if (title.length < 3) {
			return toast.error("Invalid Title");
		}
		if (text.length < 3) {
			return toast.error("Invalid Description");
		}
    if (image.length < 3) {
			return toast.error("Invalid URL");
		}
		
		const toastElement = toast.loading("Creating Post");

		try {
			const response = await Api.post.createPost({
				title,text,image,userId
			});
      console.log(response);
			toast.update(toastElement, {
				render: "Post Created Successfully",
				type: "success",
				isLoading: false,
				autoClose: true,
			});
		} catch (error) {
			responseErrorHandler(error, toastElement);
		}
  }

  return (
    <Flex flexDirection="column" gap="2rem" width="100%" height="max-content">
      <Flex flexDirection="column" gap="0.4rem" width="100%">
       <Input
          variant="filled"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        {title.length >= 5 && title.length <= 100 ? (
          ""
        ) : (
          <Heading as="h4" size="sm" color="gray.500">
            Title must be between 5 to 100 letters
          </Heading>
        )}
        <Input
          variant="filled"
          placeholder="Description"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        {text.length >= 5 && text.length <= 100 ? (
          ""
        ) : (
          <Heading as="h4" size="sm" color="gray.500">
          description must be between 5 to 100 letters
          </Heading>
        )}
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
      <Input
          variant="filled"
          placeholder="Set Image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          value={image}
        />
      </Flex>
      <Button
        mt={1}
              w={'full'}
              colorScheme="purple"
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              onClick={()=>{ createPost()}}
      >Create Post</Button>
    </Flex>
  );
};

export default CreateComponent;
