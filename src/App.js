import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
function App() {
  console.log('render app..')
  return (
    <>
      <AppLayout>
        <Toaster
          position="top-right"
          gutter={8}
        />
        <Routes>
          <Route path="/:projectId" element={<Task />} />
        </Routes>
      </AppLayout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/:projectId" element={<Task />} /> */}
        {/* <Route path="/project" element={ */}

        {/* } /> */}
        {/* <Route path="/" element={<Signup />} /> */}
        {/* <Route path="/" element={
          <div className="flex flex-col items-center w-full pt-10">
            <img src="./image/welcome.svg" className="w-5/12" alt="" />
            <h1 className="text-lg text-gray-600">Login or Sign up</h1>
          </div>
        } /> */}
      </Routes>
    </>
  );
}

export default App;
