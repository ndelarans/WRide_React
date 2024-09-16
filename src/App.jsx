import Header from './components/Header';
import Introduction from './components/Introduction';
import Diagnosis from './components/Diagnosis';
import Organization from './components/Organization';
import Objectives from './components/Objectives';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Diagnosis />
      <Organization />
      <Objectives />
      <Footer />
    </div>
  );
}

export default App;
