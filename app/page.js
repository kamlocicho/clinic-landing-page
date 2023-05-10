"use client"

import { Box, Text, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import MainHeading from "./components/Text/MainHeading";
import CircleButton from "./components/Button/CircleButton";
import TreatmentSection from "./components/Sections/TreatmentSection";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <VStack position='fixed' top='0' left='0' w='100%' h='100%' overflowY='scroll' gap='0'>
        <VStack gap='20px' minH='100vh' w='100%' justifyContent='center'>

          <Text fontSize='1rem' color='#c0c1be'>High Level Beauty, Health and Wellbeing Solutions</Text>

          <MainHeading>Plastic Surgery,</MainHeading>
          <MainHeading>Aesthetic Medicine,</MainHeading>
          <MainHeading>Dermatology and</MainHeading>
          <MainHeading>Laser Treatments</MainHeading>

          <CircleButton>Explore more</CircleButton>
        </VStack>

        <TreatmentSection />

        <Box w='100%' backgroundColor='rgba(255, 255, 255, .8)' >
          <VStack paddingTop='8rem' w='100%' maxWidth='37.5rem' marginX='auto'>
            <MainHeading fontSize='4rem'>Plastic Surgery,</MainHeading>
            <MainHeading fontSize='4rem'>Cosmetic</MainHeading>
            <MainHeading fontSize='4rem'>Treatments &</MainHeading>
            <MainHeading fontSize='4rem'>Laser Therapy</MainHeading>
            <MainHeading py='2rem' fontSize='4rem'>\</MainHeading>

            <Text fontWeight={400} textAlign='center' color='#151515' paddingBottom='3rem'>
              Since its conception, our clinic has always taken care to bring the best technology to treat our patients safely. Plastic Surgeon Dr. Xavier Tenorio regularly attends courses and conventions to be able to offer the treatments with best results.
            </Text>

            <CircleButton alignSelf='start'>Contact us</CircleButton>
          </VStack>
        </Box>
      </VStack>
    </>
  )
}
