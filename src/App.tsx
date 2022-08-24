import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SignUp, Todo } from 'src/pages';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
