import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const WorkshopCard=(props)=> {
    const navigate = useNavigate();

  return (
    <Center py={6}>
      <Box
        // onClick={()=>navigate("/details/"+props.id)}
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
          mb={10}
          pos={'relative'}>
          <Image
            src={
             props.imgpath
               
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
            src={'https://avatars.githubusercontent.com/u/50791200?v=4'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            {/* <Text fontWeight={600}>props.organizer</Text> */}
            <Text color={'gray.500'}>{props.date}</Text>
          </Stack>
        </Stack>
        <Button
          mt={1}
          w={'full'}
          colorScheme="purple"
          rounded={'xl'}
          boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
          onClick={()=>{ window.open(`https://meet.jit.si/${props.links}`)}}
        >Join Meet</Button>
      </Box>
    </Center>
  );
}
export default WorkshopCard;