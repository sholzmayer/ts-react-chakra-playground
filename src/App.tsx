import { Box, Button, ChakraProvider, Text, theme } from "@chakra-ui/react";
import * as React from "react";

export const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Count", count);
  }, [count]);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Text>Counter: {count}</Text>
        <Button onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
      </Box>
    </ChakraProvider>
  );
};
