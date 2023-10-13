import React from 'react';
import {
  Box,
  Flex,
  Center,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const Tech = () => {
  const technologies = [
    {
      name: 'CSS',
      imageSrc: '/assets/css.svg', // Update with the actual path to your image
    },
    {
      name: 'Git',
      imageSrc: '/assets/git.png',
    },
    {
      name: 'GitHub',
      imageSrc: '/assets/github.png',
    },
    {
      name: 'HTML',
      imageSrc: '/assets/html.svg',
    },
    {
      name: 'JavaScript',
      imageSrc: '/assets/js.svg',
    },
    {
      name: 'React',
      imageSrc: '/assets/react.svg',
    },
    {
      name: 'Three.js',
      imageSrc: '/assets/threejs.svg',
    },
  ];

  return (
    <Center p={4}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold" color="black">
          My Tech Stack
        </Text>
        <Wrap spacing={8}>
          {technologies.map((tech) => (
            <WrapItem key={tech.name}>
              <Box
                p={4}
                bg="white"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
              >
                <Flex direction="column" align="center">
                  <Image
                    src={tech.imageSrc}
                    alt={tech.name}
                    boxSize="100px"
                    objectFit="contain"
                  />
                  <Text mt={2} fontSize="lg" color="black">
                    {tech.name}
                  </Text>
                </Flex>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </Center>
  );
};

export default Tech;
