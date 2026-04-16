import x1 from '../assets/x1.webp';
import x2 from '../assets/x2.webp';
import x3 from '../assets/x3.webp';
import x4 from '../assets/x4.webp';

const dataProduct = [
  {
    id: 1,
    title: 'Dairy Queen',
    desc: 'Dairy Queen is one of the biggest fast-food.',
    newPrice: '$4',
    oldPrice: '$6',
    img: x1,
  },
  {
    id: 2,
    title: 'Pizza Hut',
    desc: 'Although the Pizza Hut Menu Prices .',
    newPrice: '$3',
    oldPrice: '$7',
    img: x2,
  },
  {
    id: 3,
    title: 'Burger King',
    desc: 'Together with McDonald’s, Burger King.',
    newPrice: '$5',
    oldPrice: '$6',
    img: x3,
  },
  {
    id: 4,
    title: 'Papa John’s',
    desc: 'Papa John’s is one of the most popular fast-food.',
    newPrice: '$6',
    oldPrice: '$8',
    img: x4,
  },
]

const ProductSection = () => {
  return (
    <div className='product__section'>
      <div className="product__wrapp">
        {dataProduct.map(item => (
          <div className="product__wrapper">
            <div className="product__overlay">
              <img src={item.img} alt="overlay img" />
            </div>
            <div className="product__text-wrapper">
              <p className="title__prod">{item.title}</p>
              <p className="desc__title">{item.desc}</p>
              <div className="price__wrapp">
                <p className="new__price">{item.newPrice}</p>
                <p className="old__price">{item.oldPrice}</p>
              </div>
              <button className='product__btn'>ORDER NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSection
