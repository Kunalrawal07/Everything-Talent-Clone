import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Navbar from "./Components/Navbar";
import OurValues from "./Components/Ourvalue";
import StoryBehind from "./Components/StoryBehindUs";
import HowWeThrive from "./Components/Thrive";
import JoinOurMission from "./Components/Join";
import EnhancedMilestone from "./Components/Milestone2";
export default function Home() {
  return (
    <div className='bg-black text-white'>
    <Navbar/>
    <Hero/>
    <Mission/>
    <StoryBehind/>
    <OurValues/>
    <HowWeThrive/>  
    <EnhancedMilestone/>
    <JoinOurMission/>
    <Footer/>
    </div>
  );
}
