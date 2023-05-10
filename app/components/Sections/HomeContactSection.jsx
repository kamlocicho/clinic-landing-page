import { Avatar, Box, Card, CardBody, CardHeader, Center, Flex, Heading, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MainHeading from '../Text/MainHeading'
import CircleButton from '../Button/CircleButton'

const HomeContactSection = () => {
    return (
        <Box w='100%' backgroundColor='rgba(255, 255, 255, .8)' >
            <VStack paddingTop='8rem' w='100%' maxWidth='37.5rem' marginX='auto' marginBottom='8rem'>
                <MainHeading fontSize='4rem'>Plastic Surgery,</MainHeading>
                <MainHeading fontSize='4rem'>Cosmetic</MainHeading>
                <MainHeading fontSize='4rem'>Treatments &</MainHeading>
                <MainHeading fontSize='4rem'>Laser Therapy</MainHeading>
                <MainHeading py='2rem' fontSize='4rem'>\</MainHeading>

                <Text fontWeight={400} textAlign='center' color='#151515' paddingBottom='3rem'>
                    Since its conception, our clinic has always taken care to bring the best technology to treat our patients safely. Plastic Surgeon Dr. Xavier Tenorio regularly attends courses and conventions to be able to offer the treatments with best results.
                </Text>

                <CircleButton alignSelf='start'>Contact us</CircleButton>

                <Card w='100%' borderRadius='none' boxShadow='none'>
                    <CardHeader w='100%'>
                        <Flex align='center' flexGrow={1} justify='space-between' gap='4'>
                            <Flex gap='2'>
                                <Avatar src='/avatar.jpg' p='0.5' background={'linear-gradient(40deg,#f99b4a 15%,#dd3071 50%,#c72e8d 85%)'} />

                                <Flex direction='column' gap='2'>
                                    <Heading fontWeight={500} fontSize='16px'>Filler I Plastic Surgery I Laser I Silouhet</Heading>
                                    <Text fontWeight={300} fontSize='12px'>@aesthetics_clinic_geneva</Text>
                                </Flex>
                            </Flex>
                            <Flex flexGrow={1} gap='3'>
                                <Flex direction='column' align='center' justify='center' gap='0'>
                                    <Heading fontSize='14px' fontWeight='bold'>826</Heading>
                                    <Text fontSize='12px' opacity={.5}>publications</Text>
                                </Flex>
                                <Flex direction='column' align='center' justify='center' gap='0'>
                                    <Heading fontSize='14px' fontWeight='bold'>6.7K</Heading>
                                    <Text fontSize='12px' opacity={.5}>abonnés</Text>
                                </Flex>
                                <Flex direction='column' align='center' justify='center' gap='0'>
                                    <Heading fontSize='14px' fontWeight='bold'>3.3K</Heading>
                                    <Text fontSize='12px' opacity={.5}>abonnements</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    </CardHeader>

                    <CardBody p='0' position='relative'>
                        <Img src='/instagram_image.png' cursor='pointer' />
                        <Center position='absolute' top={0} left={0} w='100%' h='100%' color='transparent' _hover={{ backgroundColor: 'rgba(0, 0, 0, .8)', color: 'white' }} transition='.2s all ease'>
                            Some text that shows up on hover
                        </Center>
                    </CardBody>
                </Card>
            </VStack>
        </Box>
    )
}

export default HomeContactSection