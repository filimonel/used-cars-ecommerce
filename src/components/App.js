import "./App.css";
import styled from "styled-components";
import Landing from "./Landing";
import Header from "./Header";
import Search from "./Search";
import About from "./About";
import AdventureBanner from "./AdventureBanner";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Landing />
      <Search />
      <AdventureBanner />
      <About />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  //
`;
export default App;
