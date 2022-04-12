import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, AboutPage, PostsPage, OnPage } from "./pages";
import './App.css';
import { Layout } from "./components/Layout";
import { Authorization } from "./pages/Authorization";
import { useState, useEffect } from 'react';




function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStatus = localStorage.getItem("user");
    userStatus && JSON.parse(userStatus) ? setUser(true) : setUser(false);
  }, [])

  useEffect(() => {
    localStorage.setItem("user", user);
  }, [user])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {!user && (
            <>
              <Route path="authorization" element={<Authorization authenticate={() => setUser(true)} />} />
              <Route path="about" element={<Navigate to="/authorization" />} />
              <Route path="about-us" element={<Navigate to="/authorization" />} />
              <Route path="posts" element={<Navigate to="/authorization" />} />
              <Route path="posts/:id" element={<Navigate to="/authorization" />} />
              <Route index element={<Navigate to="/authorization" />} />
            </>
          )}

          {user && (
            <>
              <Route index element={<HomePage logout={() => setUser(false)} />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="about-us" element={<Navigate to="/about" />} />
              <Route path="posts" element={<PostsPage />} />
              <Route path="posts/:id" element={<OnPage />} />
            </>
          )}

          <Route path="*" element={<h1 className="existing">Page doesn't exist</h1>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
