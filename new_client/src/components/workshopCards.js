import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const WorkshopCard=(props)=> {
    const navigate = useNavigate();
  return (
    <Center py={6}>
      <Box
        onClick={()=>navigate("/details/"+props._id)}
        bg={useColorModeValue('gray.50', 'gray.900')}
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'210px'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={
            //  props.imgpath
               'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit='cover'
          />
        </Box>
        <Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.title}
          </Heading>
          <Text color={'gray.500'}>
           {props.theme}
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            {/* <Text fontWeight={600}>props.organizer</Text> */}
            <Text color={'gray.500'}>{props.date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
export default WorkshopCard;