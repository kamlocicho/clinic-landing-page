import { Box, Center, Flex, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import MainHeading from '../Text/MainHeading'

const HomeSurgerySection = () => {
    return (
        <Box backgroundColor='rgba(244,242,240,.9)' w='100%'>
            <VStack paddingTop='8rem' w='100%' marginX='auto' gap='16' marginBottom='8rem'>
                <Flex gap='4'>
                    <Img src='/home_surgery.png' w='50%' />
                    <Flex direction='column' w='50%' whiteSpace='nowrap' gap='8'>
                        <VStack alignItems='start'>
                            <MainHeading>”We Know The</MainHeading>
                            <MainHeading>Secret Of</MainHeading>
                            <MainHeading>Excellence.”</MainHeading>
                        </VStack>
                        <Text opacity='0.8'>Dr. Tenorio</Text>
                    </Flex>
                </Flex>

                <Center w='600px' marginX='auto'>
                    AESTHETICS offers aesthetic medicine in all its aspects, in particular with injectable products derived from botulinum toxin and fillers for facial rejuvenation, wrinkle treatment, volume restoration of the lips and cheeks. The clinic also offers rejuvenation treatments and skin tightening by radiofrequency multipolar (Freeze) or LED lamps.
                </Center>
            </VStack>
        </Box>
    )
}

export default HomeSurgerySection