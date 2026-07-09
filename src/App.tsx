import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import CartPage from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
