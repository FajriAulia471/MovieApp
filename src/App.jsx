import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import Register from "./components/Register";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import RedirectIfProtected from "./components/RedirectIfProtected";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route
              path="/login"
              element={
                <RedirectIfProtected>
                  <Login />
                </RedirectIfProtected>
              }
            />
            <Route
              path="/Register"
              element={
                <RedirectIfProtected>
                  <Register />
                </RedirectIfProtected>
              }
            />
            <Route
              path="/user/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>

    // <Provider store={store}>
    //   <Header />

    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<MovieList />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Provider>
  );
};

export default App;
