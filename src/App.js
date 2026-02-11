import './App.scss';
import { Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home'
import About from './components/About';
import Contact from './components/contact';
import Project from './components/project';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
