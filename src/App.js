import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Components/AddReview/AddReview';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MyOrder from './Components/MyOrder/MyOrder';
import MyProfile from './Components/MyProfile/MyProfile';
import NotFound from './Components/NotFound/NotFound';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Users from './Components/Users/Users';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <div><Toaster /></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path='/purchase/:toolId' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrder />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="users" element={
            <RequireAdmin>
              <Users />
            </RequireAdmin>
          } />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
