import { BrowserRouter as Router} from "react-router-dom";
import Header from "./Component/Header";
import Routes from "./Routes";

export default function App(){
  return(
    <>
      <Header />
      <Router>
        <Routes />
      </Router>
    </>
  )
};