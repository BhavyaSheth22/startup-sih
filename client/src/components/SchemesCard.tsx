import {
    Box,
    Center,
    Text,
    Stack,
    VStack,
    StackDivider,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  const Card=(props:any)=> {
    return (
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
    
        <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}>
            <Text
              fontSize={'lg'}
              fontWeight={500}
              bg={useColorModeValue('purple.50', 'purple.900')
            }
              p={2}
              px={3}
              color={'purple.500'}
              rounded={'full'}>
              {props.title}
            </Text>
            <VStack divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'> 
            <Text fontSize={'sm'} fontWeight={500}>
            {props.tagName}
            </Text>
            <Text fontSize={'xs'} fontWeight={200}>
            {props.description}
            </Text>
            </VStack>        
        </Stack>
  
          <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={1}>  
            <Button
              mt={1}
              w={'full'}
              colorScheme="purple"
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              onClick={()=>{window.open('https://www.startupindia.gov.in'+props.path)}}
              >
              Know more
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }
  export default Card;