import { Header, Footer } from "./layout";
import { Hero, Featured, Slideshow, Banner } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Slideshow />
      <Banner />
      <Footer />
    </div>
  );
};

export default App;
