import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Libros from "./components/Libros/Libros";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import { adminActions, userActions } from "./store";
import Booking from "./components/Bookings/Booking";
import AgregarLibro from "./components/Libros/AgregarLibro";
import Footer from "./components/Footer";


function App() { 
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, [dispatch]);

  return (
    <div >
      <Header/>
      <section>
        <Routes> 
          <Route path="/" element={ <Home />}  />
          <Route path="/libros" element={ <Libros />}  />
          {!isUserLoggedIn && !isAdminLoggedIn && (
            <>
              {" "}
              <Route path="/admin" element={ <Admin />}  />
              <Route path="/login" element={ <Login />}  />
            </>
          )}
           {isUserLoggedIn && !isAdminLoggedIn && (
            <>
              {" "}
              <Route path="/booking/:id" element={ <Booking />}  />
            </>
          )}
          {isAdminLoggedIn && !isUserLoggedIn && (
            <>
              {" "}
              <Route path="/add" element={ <AgregarLibro />}  />
            </>
          )}
          
        </Routes>
      </section>

      <Footer />

      
    </div>
  );
}

export default App;
