import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { Box, Link, Flex, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';


const linkStyle = {
  fontSize: '45',
  fontWeight: 'bold',
  fontFamily: 'sketch', /* Use the custom font name */
  color: 'black',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  _hover: {
    color: 'white',
  },
};

const navbarStyle = {
  backgroundColor: 'transparent',
  color: 'white',
  position: 'fixed',
  width: '100%',
  top: '0',
  zIndex: '100',
  fontFamily: 'sketch', /* Apply the custom font to the entire Navbar */
};

const Navbar = () => {
  const nameStyle = {
    ...linkStyle,
    fontSize: 'lg',
    fontWeight: 'bold',
  };

  return (
    <Box as="nav" style={navbarStyle} p="1.5rem">
      <Flex alignItems="center" justifyContent="center">
        <Text style={nameStyle}>
          Devin Samuda
        </Text>

        <Box style={linkStyle}>
          <Link as={RouterLink} to="/About">
            About
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link as={RouterLink} to="/works">
            Works
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link as={RouterLink} to="/tech">
            Tech
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link as={RouterLink} to="/Experience">
            Exp
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link as={RouterLink} to="/contact">
            Contact
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link href="https://github.com/your-username" isExternal>
            <FaGithub size={24} />
          </Link>
        </Box>
        <Box style={linkStyle}>
          <Link href="https://linkedin.com/in/your-username" isExternal>
            <BsLinkedin size={24} />
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
