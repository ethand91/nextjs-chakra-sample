import {
  Box,
  Button,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

function TopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const ColorModeIcon = colorMode === 'light' ? SunIcon : MoonIcon;

  return (
    <Box width="100%" padding="1" backgroundColor="purple.700">
      <Box maxWidth="container.xl" margin="auto">
        <Button
          aria-label="ui theme"
          leftIcon={ <ColorModeIcon /> }
          onClick={ toggleColorMode }
          size="xs"
          marginRight="2"
          borderRadius="sm"
        >
          Toggle Theme
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
