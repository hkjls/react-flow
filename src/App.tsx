import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { ReactFlowProvider } from "@xyflow/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth";
import Interface from "./auth/interface";
import { TestProvider } from "./Context/exo_type";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certification from "./Pages/Certification";

// Étendre le thème par défaut (optionnel)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactFlowProvider>
          <AuthProvider>
            <TestProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Interface />} />
                  <Route path="/Certification" element={<Certification />} />
                </Routes>
              </Router>
            </TestProvider>
          </AuthProvider>
        </ReactFlowProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;