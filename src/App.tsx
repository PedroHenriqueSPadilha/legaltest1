import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createThemeDefault } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={createThemeDefault}>
      <Header />

      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
export default App;