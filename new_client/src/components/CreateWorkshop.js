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

const CreateComponent2 = () => {
  const [title, setTitle] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [contact, setContact] = useState("");
  const [imgpath, setImgpath] = useState("");
  const userId = getUserId();
  // const toast = useToast();

  const createWorkshop = async()=>{
    if (title.length < 3) {
			return toast.error("Invalid Title");
		}
		if (organizer.length < 3) {
			return toast.error("Invalid organizer");
		}

    if (description.length < 3) {
			return toast.error("Invalid description");
		}
		
    if (theme.length < 3) {
			return toast.error("Invalid theme");
		}
		
  

    if (contact.length < 3) {
			return toast.error("Invalid contact");
		}

    if (imgpath.length < 3) {
			return toast.error("Invalid URL");
		}
		
		const toastElement = toast.loading("Creating Post");

		try {
			const response = await Api.workshop.createWorkshop({
				title, organizer,description, theme, imgpath, contact,date
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
          placeholder="Organisation"
          onChange={(e) => {
            setOrganizer(e.target.value);
          }}
          value={organizer}
        />
        {organizer.length >= 5 && organizer.length <= 100 ? (
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
          placeholder="Set Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
      <Input
          variant="filled"
          placeholder="Set date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          value={date}
        />
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
      <Input
          variant="filled"
          placeholder="Set startup theme"
          onChange={(e) => {
            setTheme(e.target.value);
          }}
          value={theme}
        />
      </Flex>
     
    
      <Flex flexDirection="column" gap="0.4rem" width="100%">
      <Input
          variant="filled"
          placeholder="Set Contact"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          value={contact}
        />
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
      <Input
          variant="filled"
          placeholder="Set Image path"
          onChange={(e) => {
            setImgpath(e.target.value);
          }}
          value={imgpath}
        />
      </Flex>
      <Button
        mt={1}
              w={'full'}
              colorScheme="purple"
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              onClick={()=>{ createWorkshop()}}
      >Create Post</Button>
    </Flex>
  );
};

export default CreateComponent2;
