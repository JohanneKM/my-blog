import "./App.css";

import Title from "./components/Title";
import Baseline from "./components/Baseline";
import Link from "./components/Link";
import Item from "./components/Item";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Title title={"My Blog"} />

        <Baseline baseline={"An awesome baseline"} />

        <div className="firstDiv">
          <Link link={"https://www.lereacteur.io/"} text={"Le Réacteur"} />
          <Link link={"https://www.lereacteur.io/"} text={"Le Réacteur"} />
          <Link link={"https://www.lereacteur.io/"} text={"Le Réacteur"} />
        </div>

        <div className="items-and-about">
          <div className="items">
            <Item
              itemClass="test"
              itemTitle="TITLE HEADING"
              itemSubtitle="Title Description"
              itemDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
            />

            <Item
              itemClass="test"
              itemTitle="TITLE HEADING 2"
              itemSubtitle="Title Description 2"
              itemDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
            />
          </div>

          <div className="about">
            <AboutMe
              aboutMeClass="about-first"
              aboutTitle="About me"
              aboutDescription="Blabla again and again"
            />
          </div>
        </div>

        <footer>
          <Footer
            link="https://www.lereacteur.io/"
            text="Le Réacteur"
            student="Johanne Khan Malek"
          />
        </footer>
      </div>
    </>
  );
}

export default App;
