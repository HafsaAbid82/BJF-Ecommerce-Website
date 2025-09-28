import Hero from '../Sections/Hero';
import FenceTypes from '../Sections/FenceTypes';
import Location from '../Sections/Location';
import Finance from '../Sections/Finance';
import Steps from '../Sections/Steps';
import LogoSection from '../Sections/LogoSection';
import Company from '../Sections/Company';
import CompanyInfo from '../Sections/CompanyInfo';
import Franchise from '../Sections/Franchise';
import Review from '../Sections/Review';
import News from '../Sections/News';
import Counter from '../Sections/Counter';
import Video from '../Sections/Video';
import Reasons from '../Sections/Reasons';
import SignUp from '../Sections/SignUp';
import Footer from '../Components/Footer';
const Home = () => {
  return (
    <>
     <Hero/>
      <FenceTypes/>
     <Location/>
     <Finance/>
     <Steps/>
     <LogoSection/>
     <Company/>
     <CompanyInfo/>
     <Franchise/>
     <Review/>
     <News/>
     <Counter/>
     <Video/>
     <Reasons/>
     <SignUp/>
     <Footer/>
  </>
  )
}

export default Home;