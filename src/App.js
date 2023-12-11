import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter, Link} from "react-router-dom";
import Search from "./components/Search";
import { styled } from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { AnimatePresence } from "framer-motion";
function App() {
  return (<>
    
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={'/'}>deliciousss</Logo>
    </Nav>
    <div><Search/></div>
    <div><Category/></div>
    <div><Pages/></div>
    </BrowserRouter>
  </>
  );
}

const Logo = styled(Link)`
font-size: 1.5rem;
text-decoration: none;
font-weight: 600;
font-family: "Lobster 2", cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size: 2rem;
}

`

export default App;
