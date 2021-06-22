import "./App.css";
import styled from "styled-components";
import Landing from "./Landing";
import Header from "./Header";
import Search from "./Search";
import About from "./About";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Landing />
      <Search />
      <SearchForm />
      <About />
      <Footer />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  //
`;
export default App;
