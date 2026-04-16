import BurgerBannerSection from "../components/BurgerBannerSection";
import BurgerSection from "../components/BurgerSection";
import FoodList from "../components/FoodList";
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
      </div>
   )
}

export default Home;
