import z1 from '../assets/z1.webp';
import z2 from '../assets/z2.webp';
import z3 from '../assets/z3.webp';
import z4 from '../assets/z4.webp';

const dataFoodList = [
  {
    id: 1,
    title: 'Chicken Paella',
    desc: 'We just don`t make and sell food.Good food warms.',
    img: z1,
  },
  {
    id: 2,
    title: 'Taco Del Mar',
    desc: 'Taco Del Mar brings the best out of Mexican cuisine with fresh.',
    img: z2,
  },
  {
    id: 3,
    title: 'Bon Au Pain',
    desc: 'Bon Au Pain is a pioneer in the healthy fast food scene.',
    img: z3,
  },
  {
    id: 4,
    title: 'Pizza Hut.',
    desc: 'Although the Pizza Hut Menu Prices have tumbled over the years.',
    img: z4,
  },
]

const FoodList = () => {
  return (
    <div className='food__list'>
      <div className="food__wrapp">
        {dataFoodList.map(item => (
          <div className="food__wrapper" key={item.id}>
            <div className="list__img">
              <img src={item.img} alt="img food list" />
            </div>
            <div className="text__wrapp">
              <p className="title">{item.title}</p>
              <p className="item__desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodList;
