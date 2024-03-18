import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { createThemeDefault } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { ProductContextProvider } from "./components/contexts/Product";

const App = () => {
  return (
    <ThemeProvider theme={createThemeDefault}>
      <ProductContextProvider>
        <Header />

        <RouterProvider router={router} />
      </ProductContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};
export default App;
