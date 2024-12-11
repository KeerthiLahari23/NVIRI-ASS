
import './App.css';
import Navbar from './components/Navbar';
import Top from './components/Top'
import Services from './components/Services';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Vendors from './components/Vendors';
import BookRequests from './components/BookRequests';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Top/>
      <Services/>
      <BookRequests/>
      <Vendors/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
