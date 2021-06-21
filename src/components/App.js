import "./App.css";
import styled from "styled-components";
import Landing from "./Landing";
import Header from "./Header";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Landing />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  //
`;
export default App;
