import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import Finalscreen from "./pages/Finalscreen";
import { Container, Box } from "@mui/material";

function App() {
  return (
    <>
      <Router>
        <Container maxWidth="sm">
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route exact path="/" element={<Settings />} />
              <Route exact path="/questions" element={<Questions />} />
              <Route exact path="/score" element={<Finalscreen />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
//npm install @mui/material @emotion/react @emotion/styled,npm i react-router-dom
//go to installation npm mui and copy roboto font link into the index.js
//Trivia
//npm i redux react-redux
//npm html entity for hanle special character