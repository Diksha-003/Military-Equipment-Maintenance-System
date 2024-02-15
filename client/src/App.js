import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { RequestsList } from "./components/RequestsList";
import { RequestForm} from "./components/RequestForm";
import { EditForm} from "./components/EditForm";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { RedirectIfLoggedIn } from "./components/RedirectIfLoggedIn";
import { Register } from "./components/Register";
import Footer from "./components/Footer";
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";




function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path="/request-list" element={<PrivateRoute><RequestsList/></PrivateRoute>}></Route>
        <Route path="/request-registration" element={<PrivateRoute><RequestForm/></PrivateRoute>}></Route>
        <Route path="/edit/:roll" element={<PrivateRoute><EditForm/></PrivateRoute>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/contactus" element={<PrivateRoute><ContactUs/></PrivateRoute>}></Route>
        <Route path="/aboutus" element={<PrivateRoute><AboutUs/></PrivateRoute>}></Route>
        
      </Routes>

      <Footer/>
    </BrowserRouter>    
  );
}

export default App;
