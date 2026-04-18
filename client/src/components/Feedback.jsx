import qov from '../assets/qov.webp';
import people from '../assets/people.webp';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__wrapp">
        <div className="feedback__img">
          <img src={people} alt="people img" />
        </div>
        <div className="feedback__text">
          <div className="feedback__icon">
            <img src={qov} alt="gov icon" />
          </div>
          <div className="feedback__wrapper-text">
            <p className="desc">Thanks a lot for the prompt service. 
              Really appreciate. Excellence taste in Every Bite.Add 
              a joy of best Taste. Foodie Moments.
            </p>
            <p className="title">Adele A.McNeill</p>
            <p className="notation">AMIRICAN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
