import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewLayout from './components/layouts/viewLayout';
import MainLayout from './components/layouts/mainLayout';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ViewLayout />}>
          <Route path="/home" element={<Home />}/>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
