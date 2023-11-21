import { ChakraProvider, Divider } from "@chakra-ui/react";
import { Header } from "./Header/Header";
import { RecipientManager } from "./RecipientManager/RecipientManager";

const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <Divider />
      <RecipientManager />
    </ChakraProvider>
  );
};

export default App;
