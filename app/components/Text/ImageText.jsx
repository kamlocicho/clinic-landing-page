import React, { useState } from 'react'
import MainHeading from './MainHeading'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, ListItem, useBoolean } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'

const ImageText = ({ children, imgSrc, id }) => {
    const [hover, setHover] = useBoolean(false)
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, bottom } = currentTarget.getBoundingClientRect()

        const localX = clientX - left;
        const localY = bottom - clientY;

        setMouseX(localX)
        setMouseY(localY)
    }

    return (
        <>
            <ListItem w='100%' cursor='default' position='relative' textAlign='center' onMouseMove={handleMouseMove} onMouseEnter={setHover.on} onMouseLeave={setHover.off} marginBottom='20px'>
                <MainHeading zIndex='4' _before={{ content: `'${id}.'`, position: 'absolute', top: '-5', left: '-5', fontSize: '20px' }} >
                    {children}
                </MainHeading>
                {/* Breast Augmentation / Breast Augmentation by fat transfer / Breast Lift with and without scars / Breast Reduction / Implants Replacement /  */}
                {hover && <Image src='/Injection2.jpg' w='300px' zIndex='2' position='absolute' visibility='visible' bottom={mouseY} left={mouseX} />}
                <AnimatePresence initial={false}>
                    {hover &&
                        <Breadcrumb
                            initial={{ opacity: 0 }}
                            animate={{ opacity: .6 }}
                            exit={{ opacity: 0 }}
                            transitionDuration='.15s'
                            transitionTimingFunction='ease'


                            as={motion.nav}
                            opacity='.8'>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Breast Augmentation</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Breast Augmentation by fat transfer</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Breast Lift with and without scars</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Breast Reduction</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink>Implants Replacement</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    }
                </AnimatePresence>
            </ListItem>
        </>
    )
}

export default ImageText