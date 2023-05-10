import { Button } from '@chakra-ui/react'
import React from 'react'

const CircleButton = ({ children, inverted = false, ...props }) => {
    return (
        <Button
            color={inverted ? '#b9b8b8' : '#383c43'}
            fontSize='.6875rem'
            textTransform='uppercase'
            borderRadius='full'
            h='7rem'
            w='7rem'
            _hover='none'
            _active='none'
            wordBreak='break-word'
            background='transparent'
            border={inverted ? '1px solid #3d3d3c' : '1px solid #c0c1be'}
            {...props}
        >{children}</Button>
    )
}

export default CircleButton