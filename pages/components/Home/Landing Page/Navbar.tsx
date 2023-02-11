import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';

import Link from 'next/link';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <div className='mobileNav'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          
          <HStack spacing={8} alignItems={'center'}>
         <Link href='/'>
         
         <Image
             w={35}
             h={35}
             objectFit={'cover'}
              alt={'feature image'}
            cursor={'pointer'}
            src="./panaverse1.png"
            />
            
         </Link> 
            <HStack
fontWeight={600}
              as={'nav'}
              spacing={4}
              display={{ base: 'flex', md: 'flex' }}>
               <Button    > <Link href="Courses">Courses</Link></Button>
             <Button    > <Link href="About">About</Link></Button>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  mr={5}
                  src={
'./user.jpg'                  }
                />
              </MenuButton>
              {/* <ColorModeSwitcher/> */}

              <MenuList>
                <MenuItem> Profile</MenuItem>
                <MenuItem>Logout</MenuItem>
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

      </Box>

      </div>
    </>
  );
}