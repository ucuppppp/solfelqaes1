// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Login';
import CreateFormPage from './Pages/CreateForm';
import DetailFormPage from './Pages/DetailForm';
import ForbiddenPage from './Pages/Forbidden';
import ManageFormPage from './Pages/ManageForm'; 
import NotFoundPage from './Pages/NotFound'; 
import SubmitFormPage from './Pages/SubmitForm'; 
import ResponsesPage from './Pages/Responses'; 



function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/forms' element={<ManageFormPage/>} />
          <Route path='/forms/slug/detail' element={<DetailFormPage/>} />
          <Route path='/forms/create' element={<CreateFormPage/>} />
          <Route path='/forms/*' element={<ForbiddenPage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
          <Route path='/forms/slug' element={<SubmitFormPage/>} />
          <Route path='/forms/slug/responses' element={<ResponsesPage/>} />
        </Routes>
      </Router>
  );
}

export default App;
