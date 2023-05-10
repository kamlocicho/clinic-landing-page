import { Center, HStack, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import MainHeading from '../Text/MainHeading'


const MenuLink = ({ number, children, isSmall }) => {
    return (
        <MainHeading position='relative' cursor="pointer" fontSize={isSmall ? '4vh' : '7vh'} _before={{ content: `'${number}'`, fontSize: '16px', top: 0, left: isSmall ? -3 : -5, position: 'absolute' }}> {children}</MainHeading >
    )
}


const Menu = () => {
    return (
        <Center
            as={motion.div}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transitionDuration='.15s'
            transitionTimingFunction='ease'

            w='100vw'
            h='100vh'
            background='white'
            position='fixed'
            top='0'
            left='0'
            zIndex='99'
        >
            <VStack alignItems='start' gap='3rem'>
                <MenuLink number={1}>About Us</MenuLink>
                <MenuLink number={2}>Team</MenuLink>
                <MenuLink number={3}>Treatments</MenuLink>
                <MenuLink number={4}>Price List</MenuLink>

                <HStack gap='2.5rem'>
                    <MenuLink number={5} isSmall>Contact</MenuLink>
                    <MenuLink number={6} isSmall>Book Now</MenuLink>
                    <MenuLink number={7} isSmall>Blog</MenuLink>
                </HStack>
            </VStack>
        </Center>
    )
}

export default Menu