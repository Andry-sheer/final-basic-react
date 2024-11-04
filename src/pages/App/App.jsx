import "../../scss/style.scss";
import Footer from "../../components/Footer";
import Sprites from "../../components/Sprites";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import Cards from "../../components/Cards";
import TeamSection from "../../components/TeamSection";
import Partners from "../../components/Partners";
import PublicationSection from "../../components/PublicationSection";

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
          <Cards/>
      </div>
      <main>
        <TeamSection/>
        <Partners/>
        <PublicationSection/>
      </main>

      <Footer />
      <Sprites/>
    </div>
  );
};

export default App;
