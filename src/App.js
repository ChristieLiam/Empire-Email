import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';


// if on this site we must check if the user is logged in if the user is logged in auto send to dashboard    Story Status: Approved

// so while at / if we are logged in auto redirect to dashboard...?.?.?

function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
      
        <Header />

        <main className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

    
export default App;