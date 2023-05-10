"use client"

import { CloseIcon, HamburgerIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { Box, Button, Center, CloseButton, Flex, Grid, HStack, IconButton, Input, InputGroup, InputRightAddon, Link, MenuButton, Select, VStack, useBoolean } from "@chakra-ui/react"
import { AnimatePresence, motion } from "framer-motion"
import MainHeading from "../Text/MainHeading"
import Menu from "./Menu"

const NavLink = ({ children }) => {
    return (
        <Link
            h='100%'
            color='#151616'
            textTransform='uppercase'
            lineHeight='2rem'
            letterSpacing='0.04em'
            fontSize='.6875rem'
            fontWeight='400'
            _hover={{ textDecoration: 'none' }}
        >{children}</Link>
    )
}

const NavButton = ({ onClick, icon, children, ...props }) => {
    return (
        <IconButton
            icon={icon}
            color='#151616'
            background='transparent'
            size='sm'
            h='100%'
            _hover={{
                color: 'rgba(189, 195, 199, 1)'
            }}
            onClick={onClick}
            _active='none'
            {...props}
        >{children}</IconButton>
    )
}


const Navbar = () => {
    const [openMenu, setOpenMenu] = useBoolean();
    const [openSearch, setOpenSearch] = useBoolean();

    return (
        <>
            <Flex align='center' w='100%' justifyContent='space-between' p='30px' position='fixed' top='0' left='0' zIndex='100' borderBottom='1px solid #cecece'>
                <Flex align='center' overflow='visible' gap='3rem' w='100%'>
                    <NavLink>US</NavLink>
                    <NavLink>TREATMENTS</NavLink>
                    <NavLink>LOCATION</NavLink>
                    <NavLink>BLOG</NavLink>
                    <NavLink>PRICE LIST</NavLink>
                </Flex>

                <HStack justifyContent='center' textAlign='center' alignItems='center' gap='3rem' w='100%'>
                    <NavLink>LOGO</NavLink>
                </HStack>

                <HStack justifyContent='end' gap='3rem' w='100%'>
                    <NavLink>BOOK NOW</NavLink>
                    <Box position='relative'>
                        <NavButton icon={<SearchIcon />} onClick={setOpenSearch.toggle} />

                        <AnimatePresence initial={false}>
                            {openSearch &&
                                <InputGroup
                                    as={motion.div}
                                    initial={{ x: 400, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 400, opacity: 0 }}
                                    transitionDuration='.15s'
                                    transitionTimingFunction='ease'

                                    position='absolute'
                                    bottom='-6rem'
                                    right='0'
                                    background='#fff'
                                    w='360px'
                                    h='56px'
                                    alignContent='center'
                                >
                                    <Input variant='unstyled' placeholder="SEARCH" fontSize='12px' fontWeight={400} opacity='.8' marginLeft='1rem' />

                                    <InputRightAddon background='transparent' border='none' _hover='none' alignSelf='center'>
                                        <CloseButton _hover='none' onClick={setOpenSearch.off} />
                                    </InputRightAddon>
                                </InputGroup>
                            }
                        </AnimatePresence>
                    </Box>

                    <Select variant='unstyled' defaultValue='EN' iconSize="sm" size='sm' w='60px' p='0' fontSize='.6875rem' lineHeight='1rem' letterSpacing='.04rem' textTransform='uppercase'>
                        <option value="EN">EN</option>
                        <option value="FR">FR</option>
                    </Select>

                    <NavButton icon={openMenu ? <SmallCloseIcon boxSize='5' /> : <HamburgerIcon boxSize='5' />} size='lg' onClick={setOpenMenu.toggle} />

                </HStack>
            </Flex >


            <AnimatePresence initial={false}>
                {openMenu && <Menu />}
            </AnimatePresence>
        </>
    )
}

export default Navbar