// Chakra imports
import { Flex, useColorModeValue, Box, Text } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
  // Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');
  let gradient = useColorModeValue(
    'linear(to-r, teal.400, blue.500)',
    'linear(to-r, teal.200, blue.300)'
  );

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
    

   
    >
      <Box
        bgGradient={gradient}
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        fontFamily="heading"
      >
        研究用
      </Box>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
