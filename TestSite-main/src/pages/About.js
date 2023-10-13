import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  Center,
} from '@chakra-ui/react';

const AboutMe = () => {
  const customFontStyle = {
    fontFamily: 'CustomFont',
  };

  const aboutMeStyle = {
    marginTop: '2rem', // Add margin to move the content higher
  };

  return (
    <Center align="center" justify="center">
      <Box p={4} style={aboutMeStyle}>
        <Heading as="h1" size="2xl" color="black" style={customFontStyle}>
          About Me
        </Heading>
        <VStack spacing={4} style={{ lineHeight: '1.5' }}>
          <Heading as="h2" size="lg" color="black">
            Who Am I?
          </Heading>
          <Text color="black" style={{ ...customFontStyle, lineHeight: '1.5' }}>
            Hello, my name is Devin Samuda, and I am a recent Computer Science Graduate from Bowie State University.
          </Text>
        </VStack>
        <VStack spacing={4} style={{ lineHeight: '1.5' }}>
          <Heading as="h2" size="lg" color="black">
            Hobbies
          </Heading>
          <Text color="black" style={{ ...customFontStyle, lineHeight: '1.5' }}>
            When I'm not coding, I enjoy reading books, hiking, and
            spending time with my family and pets. I'm also a coffee
            enthusiast and love exploring new coffee shops.
          </Text>
        </VStack>
      </Box>
    </Center>
  );
};

export default AboutMe;
