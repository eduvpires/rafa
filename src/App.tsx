import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ResetStyle } from "./styles/ResetStyle";

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
