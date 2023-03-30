import './App.sass'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Form from './components/Form'
import Layout from './components/Layout'
import Rules from './components/Rules';

function App() {
  return (
    <Routes>
      <Route path="/welcome" element={<Layout />} >
        <Route index path='/welcome' element={<Welcome />}></Route>
        <Route path='/welcome/rules' element={<Rules />}></Route>
        <Route path='/welcome/form' element={<Form />}></Route>
      </Route>
   </Routes>
  );
}

export default App;