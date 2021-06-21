import "./App.css";
import styled from "styled-components";
import Landing from "./Landing";
import Header from "./Header";
import Search from "./Search";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Landing />
      <Search />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  //
`;
export default App;
