import "./App.css";
import Header from "./components/Header";
// import Routes from './components/Routes'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "./pages/AddContact";
import Home from "./pages/Home";
import AllContacts from "./pages/AllContacts";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header></Header>
          {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add-contact" element={<AddContact/>}></Route>
          <Route path="/all-contact" element={<AllContacts/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
