import BurgerBannerSection from "../components/BurgerBannerSection";
import BurgerSection from "../components/BurgerSection";
import DownloadMenu from "../components/DownloadMenu";
import Feedback from "../components/Feedback";
import FoodList from "../components/FoodList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";

const Home = () => {
   return (
      <div>
         <Header />
         <BurgerSection />
         <FoodList />
         <BurgerBannerSection />
         <ProductSection />
         <Feedback />
         <DownloadMenu />
         <Footer />
      </div>
   )
}

export default Home;
