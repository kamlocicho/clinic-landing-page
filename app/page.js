"use client"

import { Text, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import MainHeading from "./components/Text/MainHeading";
import CircleButton from "./components/Button/CircleButton";
import TreatmentSection from "./components/Sections/TreatmentSection";
import HomeContactSection from "./components/Sections/HomeContactSection";
import HomeSurgerySection from "./components/Sections/HomeSurgerySection";

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

        <HomeContactSection />

        <HomeSurgerySection />
      </VStack>
    </>
  )
}
