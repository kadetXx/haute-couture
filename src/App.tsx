import React from "react";
import { Header, Footer } from "./layout";
import { Hero, Featured } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
};

export default App;
