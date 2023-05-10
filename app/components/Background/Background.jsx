import React from 'react'

const Background = () => {
    return (
        <video autoPlay muted loop id="myVideo" style={{
            position: 'fixed',
            right: 0,
            bottom: 0,
            minWidth: '100%',
            minHeight: '100%',
        }}>
            <source src='/cover.mp4' type='video/mp4' />
        </video>
    )
}

export default Background