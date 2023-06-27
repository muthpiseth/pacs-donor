import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewLayout from './components/layouts/viewLayout';
import MainLayout from './components/layouts/mainLayout';
import List from './pages/contents/list';
import Group from './pages/contents/group';
import Analysis from './pages/contents/analysis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ViewLayout />}>
          <Route path="/home" element={<List />}/>
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/" element={<List />}/>
          <Route path="/group" element={<Group />}/>
          <Route path="/analysis" element={<Analysis />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
