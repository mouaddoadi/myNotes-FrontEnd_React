import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<NotesListPage />} />
          <Route path='/note/:id' element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
