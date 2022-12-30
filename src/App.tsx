import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { AppStyle } from "./appStyle";
import { EntryCard } from "./components/entry";
import { ResultCard } from "./components/result";
import { decrypt, encrypt } from "./helpers/encrypt";
import { theme } from "./theme";

function App() {
  const [result, setResult] = useState("");
  const onEncrypt = (text: string) => {
    setResult(encrypt(text));
  };
  const onDecrypt = (text: string) => {
    setResult(decrypt(text));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setResult("");
    toast.success("Texto copiado al portapapeles");
  };

  return (
    <ThemeProvider theme={theme}>
      <AppStyle>
        <EntryCard onEncrypt={onEncrypt} onDecrypt={onDecrypt} />
        <ResultCard result={result} handleCopy={handleCopy} />
      </AppStyle>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
