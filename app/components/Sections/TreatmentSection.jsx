import { Box, List, Text, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import MainHeading from '../Text/MainHeading'
import ImageText from '../Text/ImageText'
import CircleButton from '../Button/CircleButton'

const TreatmentSection = () => {
    return (
        <VStack w='100%' background='rgba(15, 15, 15, .9)' paddingBottom='3rem'>
            <Box position='relative' w='100%' maxWidth='1200px' paddingBottom='8rem'>
                <Image src='/Aesthetic_2.png' mx='auto' />
                <MainHeading fontSize='9rem' color='#fff' position='absolute' top='5' right='5'>Gstaad</MainHeading>
                <MainHeading position='absolute' top='20' left='5' fontSize='9rem' color='#fff'>Geneva</MainHeading>
            </Box>

            <Box>
                <Text textAlign='center' color='#fff' fontSize='1rem' fontWeight={300} mb='1rem'>
                    Our Treatments
                </Text>

                <List color='#fff' stylePosition='initial'>
                    <ImageText id='01'>Breast Surgery</ImageText>
                    <ImageText id='02'>Silhouette</ImageText>
                    <ImageText id='03'>Face Surgery</ImageText>
                    <ImageText id='04'>Injections</ImageText>
                    <ImageText id='05'>Dermatology</ImageText>
                    <ImageText id='06'>Laser & Cosmetics</ImageText>
                    <ImageText id='07'>Aesthetic Medicine</ImageText>
                    <ImageText id='08'>Beauty treatments</ImageText>
                </List>
            </Box>

            <CircleButton inverted>Explore</CircleButton>
        </VStack>
    )
}

export default TreatmentSection