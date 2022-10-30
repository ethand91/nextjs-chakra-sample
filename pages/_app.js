import { ChakraProvider, Box } from '@chakra-ui/react';
import TopBar from './../components/TopBar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <TopBar />
      <Box maxWidth="container.xl" margin="auto">
        <Component { ...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp
