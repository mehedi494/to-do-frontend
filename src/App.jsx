import "./App.css";
import Header from "./components/Header";
// import Routes from './components/Routes'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* <Home></Home> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/add-contact" element={<AddTask />}></Route>
          <Route path="/all-contact" element={<AddTask />}></Route>
          <Route path="/edit-contact/:id" element={<EditTask />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
