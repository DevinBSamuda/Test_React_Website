// DropdownNavbar.js
import React from 'react';
import { VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const DropdownNavbar = ({ isOpen, onClose }) => {
  return (
    <VStack
      spacing={2}
      display={isOpen ? 'flex' : 'none'}
      position="absolute"
      top="60px" // Adjust the top position as needed
      right="10px" // Adjust the right position as needed
      backgroundColor="222"
      borderRadius="0.25rem"
      p="1rem"
      zIndex="999"
      boxShadow="lg"
    >
      <Link as={RouterLink} to="/About" color="white">
        About
      </Link>
      <Link as={RouterLink} to="/works" color="white">
        Works
      </Link>
      <Link as={RouterLink} to="/tech" color="white">
        Tech
      </Link>
      <Link as={RouterLink} to="/Experience" color="white">
        Exp
      </Link>
      <Link as={RouterLink} to="/contact" color="white">
        Contact
      </Link>
    </VStack>
  );
};

export default DropdownNavbar;
