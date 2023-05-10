import { raleway } from '@/app/fonts'
import { Heading } from '@chakra-ui/react'
import React from 'react'

const MainHeading = ({ children, ...props }) => {
    return (
        <Heading className={raleway.className} fontWeight='200' fontSize='4.5rem' {...props}>{children}</Heading>
    )
}

export default MainHeading