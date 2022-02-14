import { Router } from "./router";
import  { ProdProvider } from './contexts/ProductContext'

const App = () => {
  return (
    <ProdProvider>
      <Router/>
    </ProdProvider>
  );
}

export default App;
