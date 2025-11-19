import { test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route, MemoryRouter} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';


// Unit Tests Will Begin Here 

//pages have correct information and elements ....

// Integration Will Tests Begin Here

// all pages w header and footer... w a logo.... 

test('Renders 404 Error page when visiting a non-existent route', () => {
    render(
        <MemoryRouter initialEntries={['/some/bad/route/that/does/not/exist']}>
            <App />
        </MemoryRouter>

    );

    expect(screen.getByRole('heading', { name: /404 - Page Not Found/i })).toBeInTheDocument();
});