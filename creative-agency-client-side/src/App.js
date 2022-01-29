
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddServices from './Pages/DashboardPage/AdminDashboard/AddServices/AddServices';
import MakeAdmin from './Pages/DashboardPage/AdminDashboard/MakeAdmin/MakeAdmin';
import OrderList from './Pages/DashboardPage/AdminDashboard/OrderList/OrderList';
import ServiceList from './Pages/DashboardPage/AdminDashboard/ServiceList/ServiceList';
import DashboardRoot from './Pages/DashboardPage/DashboardRoot/DashboardRoot';
import Home from './Pages/HomePage/Home/Home';
import Login from './Pages/LoginPage/Login';
import AdminRoute from './Pages/ProtectedRoute/AdminRoute';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute';
import Signup from './Pages/SignupPage/Signup';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/dashboard' element={<ProtectedRoute>
            <DashboardRoot></DashboardRoot>
          </ProtectedRoute>}>
            <Route path='orderList' element={<AdminRoute>
              <OrderList></OrderList>
            </AdminRoute>} />
            <Route path='serviceList' element={<AdminRoute>
              <ServiceList></ServiceList>
            </AdminRoute>} />
            <Route path='addService' element={<AdminRoute>
              <AddServices></AddServices>
            </AdminRoute>} />
            <Route path='makeAdmin' element={<AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
