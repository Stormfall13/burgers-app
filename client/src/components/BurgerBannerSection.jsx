import bk from '../assets/bk.webp';

const BurgerBannerSection = () => {
  return (
    <div className="burgers__section">
      <div className="burgers__wrapp">
        <div className="burger__img">
          <img src={bk} alt="bk" />
        </div>
        <div className="text__wrapper">
          <p className="wrapper__title">Burger King</p>
          <p className="wrapper__text">
            Together with McDonald’s, Burger King has grown 
            to become synonymous with burgers in the US.
          </p>
          <div className="price__wrapp">
            <p className="new__price">$6</p>
            <p className="old__price">$8</p>
          </div>
          <button className="burgers__btn">ORDER NOW</button>
        </div>
      </div>
    </div>
  )
}

export default BurgerBannerSection
