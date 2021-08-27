import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import { Resume } from './pages/Resume';
import { Home } from './pages/Home';
import './App.css';

const App = () => {
  const [ { themeName } ] = useContext(ThemeContext);

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
      </Switch>

      {/* <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main> */}

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
