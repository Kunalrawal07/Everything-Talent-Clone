import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Mission from "./Components/Mission";
import Navbar from "./Components/Navbar";
import OurValues from "./Components/Ourvalue";
import StoryBehind from "./Components/StoryBehindUs";
import HowWeThrive from "./Components/Thrive";
import MilestonesTimeline from "./Components/Milestone";
import JoinOurMission from "./Components/Join";
// import Milestone2 from "./Components/Milestone2";
// import Milestone3 from "./Components/Milestone3";

export default function Home() {
  return (
    <div className='bg-black text-white'>
    <Navbar/>
    <Hero/>
    <Mission/>
    <StoryBehind/>
    <OurValues/>
    <HowWeThrive/>
    {/* <Milestone/> */}
    <MilestonesTimeline/>
    {/* <Milestone2/>
    <Milestone3/> */}
    <JoinOurMission/>

    <Footer/>
    </div>
  );
}
