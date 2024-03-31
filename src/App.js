import { CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import FormBuilder from "./components/views/FormBuilder";
import Main from "./components/views/Main";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/views/Preview";

function App() {
  return (
    <>
      <Header />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form/1" element={<FormBuilder />} />
        <Route path="/form/1/preview" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
