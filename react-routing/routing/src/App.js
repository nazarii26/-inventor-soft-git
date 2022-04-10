import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage, AboutPage, PostsPage, OnPage } from "./pages";
import './App.css';
import { Layout } from "./components/Layout";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<Navigate to="/about" />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:id" element={<OnPage />} />
          <Route path="*" element={<h1>Pa ge doesn't exist</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
