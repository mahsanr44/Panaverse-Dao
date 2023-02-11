import { Box, chakra, Container,Text, Divider, Flex, Heading, Link, Stack } from "@chakra-ui/react";

export default function AI() {
  return (
      <>

<Heading
      mt={20}
      p={10}
                        lineHeight={1}
                        fontWeight={550}
                        fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
                        >
                        <Text

                            as={'span'}
                            position={'relative'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: '30%',
                                position: 'absolute',
                                bottom: 1,
                                left: 0,

                                zIndex: -1,
                            }}>
Artificial Intelligence (AI) and Deep Learning Specialization
                        </Text>
                        <br />
                        <Text color='black'  
                       pt={6} pb={3}
                        fontWeight={350}
                        fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>

The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
                        </Text>
</Heading>
<Stack direction={["column","row","row"]}> 
<Flex
  
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="#FC8181
    "
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
    boxShadow='dark-lg'

  >
    <Flex justifyContent="center" alignItems="center">
     
      <chakra.span
        color="brand.800"
        _dark={{
          color: "brand.900",
        }}
        px={3}
        py={1}
        rounded="full"
        textTransform="uppercase"
        fontSize="md"
      >
        QUARTER IV
      </chakra.span>
    </Flex>

    <Box 
textAlign="center"
>
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
Developing Planet-Scale Intelligent APIs and Python Programming   </chakra.h1>
      
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
         
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
        </Link>
      </Flex>
    </Box>
  </Box>
</Flex>
<Flex
  
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    w="full"
    maxW="sm"
    mx="auto"
    px={4}
    py={3}
    bg="#48BB78
    "
    _dark={{
      bg: "gray.800",
    }}
    shadow="md"
    rounded="md"
    boxShadow='dark-lg'

  >
    <Flex justifyContent="center" alignItems="center">
     
      <chakra.span
        color="brand.800"
        _dark={{
          color: "brand.900",
        }}
        px={3}
        py={1}
        rounded="full"
        textTransform="uppercase"
        fontSize="md"
      >
        QUARTER V
      </chakra.span>
    </Flex>

    <Box 
textAlign="center"
>
      <chakra.h1
        fontSize="lg"
        fontWeight="bold"
        
        mt={2}
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
Deep Learning and Machine Learning Operations( MLOps)    </chakra.h1>
      
    </Box>

    <Box>
      <Flex
        alignItems="center"
        mt={2}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        
       
      </Flex>

      <Flex alignItems="center" justifyContent="center" mt={4}>
        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
         
        </Link>

        <Link
          mr={2}
          color="gray.800"
          _dark={{
            color: "gray.400",
          }}
          _hover={{
            color: "gray.700",
            _dark: {
              color: "gray.300",
            },
          }}
          cursor="pointer"
        >
        </Link>
      </Flex>
    </Box>
  </Box>
</Flex>
</Stack> 
<Divider borderColor={"black"}/>
<Divider borderColor={"black"}/>
<Divider borderColor={"black"}/>
<Divider borderColor={"black"}/>
      </>
  );
}