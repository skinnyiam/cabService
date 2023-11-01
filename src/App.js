import { Routes, Route , useLocation } from "react-router-dom";





import Header from "./components/Header";
import { Container } from "react-bootstrap";
import {
  Advantage,
  Benefits,
  Booking , 
  Cars ,
  FAQ, 
  Facts,
  Hero ,
  Footer, 
} from "./pages";
import SeamlessExp from "./pages/SeamlessExp";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Details from "./components/Details";
import JoinUs from "./pages/JoinUs";
import Agent from "./components/AgentReg";
import Affiliate from "./components/AffiliateReg";
import PartnerPortal from "./components/PartnerPortal";
import Payment from "./components/Stripe";
import WalletPage from "./components/WalletPage";




function App() {
  const location = useLocation();
  return ( 

   <>
   <Header />

   <Container>
   <Routes location={location} key={location.pathname}>
    <Route path="/" element= {<Hero />} />
    <Route path="/" element= {<Advantage />} />
    <Route path="/booking" element= {<Booking />} />
    <Route path="/facts" element= {<Facts />} />
    <Route path="/benefits" element= {<Benefits />} />
    <Route path="/cars" element= {<Cars />} />
    <Route path="/FAQ" element= {<FAQ />} />
    <Route path="/seamlessExperience" element= {<SeamlessExp />} />
    <Route path="/contact" element= {<Contact />} />
    <Route path="/about" element= {<About />} />
    <Route path="/details" element = {<Details />} />
    <Route path="/joinus" element = {<JoinUs />} />
    <Route path="/agentreg" element = {<Agent />} />
    <Route path="/affiliatereg" element = {<Affiliate />} />
    <Route path="/partnerportal" element = {<PartnerPortal />} />
    <Route path="/stripe" element = {<Payment />} />
    <Route path="/wallet" element = {<WalletPage />} />
   </Routes> 

   </Container>
   </>
  );
}

export default App;
