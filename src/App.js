import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewLayout from './components/layouts/viewLayout';
import MainLayout from './components/layouts/mainLayout';
import Dashboard from './pages/contents/dashboard';
import Group from './pages/contents/group';
import Analysis from './pages/contents/analysis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ViewLayout />}>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/group" element={<Group />}/>
          <Route path="/analysis" element={<Analysis />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
