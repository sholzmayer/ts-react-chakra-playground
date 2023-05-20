import { Box, Button, ChakraProvider, Text, theme } from "@chakra-ui/react";
import * as React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>The current time is: {new Date().toISOString()}</Text>
        Counter: <Text aria-label="Counter">{count}</Text>
        <Button onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
      </Box>
    </ChakraProvider>
  );
};
