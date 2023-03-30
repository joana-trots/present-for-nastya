import './App.sass'
import { Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import Form from './components/Form'
import Layout from './components/Layout'
import Rules from './components/Rules';

function App() {
  return (
    <Routes>
      <Route path="/present-for-nastya" element={<Layout />} >
        <Route index path='/present-for-nastya' element={<Welcome />}></Route>
        <Route path='/present-for-nastya/rules' element={<Rules />}></Route>
        <Route path='/present-for-nastya/form' element={<Form />}></Route>
      </Route>
   </Routes>
  );
}

export default App;