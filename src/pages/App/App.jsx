import "../../scss/style.scss";
import Footer from "../../components/Footer";
import Sprites from "../../components/Sprites";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">
            <Header/>
            <h1 className="head__title">you legal solutions provider</h1>
            <a className="head__link" href="#tabs" aria-label="link for tabs"></a>
          </div>
          <Tabs/>
        </div>
      
      <Footer />
      <Sprites/>
    </div>
  );
};

export default App;
