import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Authentication from "./routes/Authentication";
import Shop from "./routes/Shop";
import { Routes, Route } from "react-router-dom";
import Checkout from "./routes/Checkout";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserFromAuth } from "./utils/firebase";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
