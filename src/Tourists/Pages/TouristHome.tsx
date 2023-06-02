import { HeroBody } from '../StyledComponents/GlobalStyle';
import { Footer } from './Footer';
import { Header } from './Header';
import { About } from './HomePages/Aboutus';
import { ClientFeeback } from './HomePages/ClientFeedback';
import { Expore } from './HomePages/Expore';
import FlightInfo from './HomePages/FlightInfo';
import { Hero } from './HomePages/Hero';
import { Reservations } from './HomePages/Reservations';
import { Services } from './Services';

const Home = ()=>{
    return (
        <>
            <HeroBody>
                <Header />
                <Hero />
                <FlightInfo />
                <Expore />
                <Services />
                <Reservations />
                <About />
                <ClientFeeback />
                <Footer />
            </HeroBody>
        </>
    )
}
export default Home;