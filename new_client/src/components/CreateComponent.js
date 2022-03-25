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

const CreateComponent = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const uploadImage = (e) => {
    //@ts-ignore
    setImageUrl(URL.createObjectURL(e?.target?.files[0]));
  };
  const toast = useToast();
  return (
    <Flex flexDirection="column" gap="2rem" width="100%" height="max-content">
      <Heading as="h4" size="md">
        ** Both image and caption are required and you have to complete the
        validation to create a post so dont be an asshole and no need to dm me
        on discord that its not working **
      </Heading>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <Input
          variant="filled"
          placeholder="Caption"
          onChange={(e) => {
            setCaption(e.target.value);
          }}
          value={caption}
        />
        {caption.length >= 5 && caption.length <= 100 ? (
          ""
        ) : (
          <Heading as="h4" size="sm" color="gray.500">
            Caption must be between 5 to 100 letters
          </Heading>
        )}
      </Flex>
      <Flex flexDirection="column" gap="0.4rem" width="100%">
        <input
          type="file"
          accept="image/*"
          placeholder="Select post image"
          onChange={uploadImage}
        />
        {imageUrl !== "" ? (
          <Image src={imageUrl} alt="" width="100%" />
        ) : (
          <>
            <Flex alignItems="center" gap="1rem">
              <BsImageFill size="50%" />
              <Heading as="h4" size="md">
                Select image idiot
              </Heading>
            </Flex>
            <Heading as="h4" size="sm" color="gray.500">
              Image is required
            </Heading>
          </>
        )}
      </Flex>
      {caption.length >= 5 && caption.length <= 100 && imageUrl !== "" ? (
        <Button
          colorScheme="purple"
          marginBottom="1rem"
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
          Create post
        </Button>
      ) : (
        <Button colorScheme="purple" marginBottom="1rem" disabled>
          Create post
        </Button>
      )}
    </Flex>
  );
};

export default CreateComponent;
