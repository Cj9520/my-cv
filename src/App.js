import './App.scss';
import { HashRouter as Router, Route, Router } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home'
import About from './components/About';
import Contact from './components/contact';
 


function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Route>
      </Router>
    </>
  );
}

export default App;
