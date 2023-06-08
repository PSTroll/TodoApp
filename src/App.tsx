import Header from "./components/UI/Header";
import List from "./components/Todos/List";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <div
      className={"bg-background-main h-screen flex flex-col justify-between"}
    >
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
