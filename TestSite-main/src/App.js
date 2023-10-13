import React, { useEffect } from 'react';
import { extendTheme, ChakraProvider, Flex } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LegendaryCursor from 'legendary-cursor';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Tech from './pages/Tech';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import DropdownNavbar from './components/DropDownNavbar';

/*const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'League-Spartan',
        fontSize: '1.5rem',
      },
    },
  },
});*/

const App = () => {
  // Use CSS media queries to determine the screen size
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    window.addEventListener('load', () => {
      LegendaryCursor.init({
        lineSize: 0.1,
        opacityDecrement: 0.8,
        speedExpFactor: 0.4,
        lineExpFactor: 0.4,
        sparklesCount: 35,
        maxOpacity: 0.8,
        texture1: '/assets/texture1.jpg',
        texture2: '/assets/texture2.jpg',
        texture3: '/assets/texture3.jpg',
      });
    });
  }, []);

  return (
    <ChakraProvider>
      <Router>
        {isMobile ? <DropdownNavbar /> : <Navbar />}
        <Flex
          p={8}
          direction="column"
          align="center"
          justify="center"
          minHeight="100vh" // Set minHeight to 100vh
          maxHeight="100vh"
          overflowY="auto"
          // Apply background image using CSS
          style={{
            backgroundImage: `url('/assets/paper.jpg')`, // Specify the path to your image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Optional: Fixed background
          }}
        >
          <Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Works">
              <Works />
            </Route>
            <Route exact path="/Tech">
              <Tech />
            </Route>
            <Route exact path="/Experience">
              <Experience />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </Flex>
      </Router>
    </ChakraProvider>
  );
};

export default App;
