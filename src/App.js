import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Signup from './components/Signup/Signup';
import SingleProduct from './components/SingleProduct/SingleProduct';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './components/ResetPassword/ResetPassword';
import NotFound from './components/NotFound/NotFound';
import AddItem from './components/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<ManageInventory />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/inventory/:productId"
          element={
            <RequireAuth>
              <SingleProduct />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
