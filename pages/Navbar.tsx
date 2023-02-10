import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeSwitcher from './components/Home/colormode';
import Link from 'next/link';
const Links = [ 'Courses', 'About'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <>
  
  <Link href={'Courses'}       
    
  
    
    >
      {children}
    </Link>
    <Link href={'About'}    
    
    
    >
    {children}
  </Link></>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <div className='mobileNav'>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            
          />
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
              display={{ base: 'none', md: 'flex' }}>
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

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      </div>
    </>
  );
}