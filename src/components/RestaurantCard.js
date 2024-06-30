import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>
        <b>{name}</b>
      </h3>
      <h4>
        <img
          className="stars"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHB0q0R6R_AYydfF1jOHKx37JvWDtgIs6nNQ&s"
          alt="stars"
        />
        {avgRating} • {sla.slaString}
      </h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
