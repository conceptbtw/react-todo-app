import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-svh flex flex-col justify-center items-center md:text-xl font-bold text-neutral-200 bg-neutral-800">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
