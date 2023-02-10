
import { Box, Button, Modal, ModalHeader, ModalBody, ModalCloseButton, ModalOverlay, ModalContent, ModalFooter, useDisclosure, Flex, Container, Divider, Heading, Center } from "@chakra-ui/react"
import React from "react"
export default function Program() {
  const { isOpen: isEditOpen, onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const { isOpen: isEditOpen2, onOpen: onEditOpen2, onClose: onEditClose2 } = useDisclosure()
  const { isOpen: isEditOpen3, onOpen: onEditOpen3, onClose: onEditClose3 } = useDisclosure()

  return (
    <>
    
      <Container maxW={['340px','640px','640px','1000px']} border="3px solid red" bgGradient='linear(to-r, #ff00000f, #00a9ff17)' p={4} borderRadius={26}
      >
        <Heading textAlign="center" as='h4'><code>The Panaverse Community and Syllabus</code></Heading>
        <br />
        <Box   >
          Introduction to the Program
        </Box>
        <Button mt={4} colorScheme='blue' onClick={onEditOpen}>
          View Details
        </Button>
        <Modal isOpen={isEditOpen} onClose={onEditClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>                  Introduction to the Program
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.
              Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onEditClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Divider m={4} maxWidth={930} />

        <Box   >
          The Program in a Nutshell: Earn While You Learn
        </Box>
        <Button mt={4} colorScheme='blue' onClick={onEditOpen2}>
          View Details
        </Button>
        <Modal isOpen={isEditOpen2} onClose={onEditClose2}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>The Program in a Nutshell: Earn While You Learn</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program beginning. It resembles a cross between a corporate venture and an educational project.    </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onEditClose2}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Divider m={4} maxWidth={930} />

        <Box   >
          Program of Studies        </Box>
        <Button mt={4} colorScheme='blue' onClick={onEditOpen3}>
          View Details
        </Button>
        <Modal isOpen={isEditOpen3} onClose={onEditClose3}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Program of Studies</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
            </ModalBody><ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onEditClose3}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Container>
    </>
  )
}