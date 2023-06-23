import {BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./Users/Layout";
import Home from "./Users/Home/Home";
import About from "./Users/About/About";
import SingleBlog from "./Users/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";
import AdminBlogs from "./Admin/Home/AdminBlogs";
import AddBlog from "./Admin/Blog/AddBlogs";
import EditBlog from "./Admin/Blog/EditBlogs";




function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="blog/:id" element={<SingleBlog/>}/>
        </Route>


        <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminBlogs />} />
            <Route path="addblog" element={<AddBlog/>} />
            <Route path="edit/:id" element={<EditBlog/>} />
          </Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
