import Slider from "../components/Slider";
import Header from '../components/Header';
import ArtCraftSection from "../components/ArtCraftSection";
import Gallery from "../components/Gallery";
import Contacts from "../components/Contacts";
import AllCard from "../components/AllCard";
// import background from './../assets/bg.jpg'

const Home = () => {
    return (
        <div>
       <Header></Header>
       <div className="-z-10">
            <Slider></Slider>

           </div>
          <div>
             <AllCard></AllCard>
             </div>
           <div>
            <ArtCraftSection></ArtCraftSection>
           </div>
           <Gallery></Gallery>
           <Contacts></Contacts>
        </div>
    );
};

export default Home;