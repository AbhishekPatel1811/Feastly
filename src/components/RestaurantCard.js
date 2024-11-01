import { IMG_CDN_URL } from "../constants";
import stars from "../assets/stars.png";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
}) => {
  return (
    <div className="w-[22vw] px-6 py-4">
      <img
        className="w-full h-[30vh] object-cover object-bottom rounded-xl drop-shadow-xl"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-6 flex justify-start items-center gap-4 font-thin tracking-wide">
        <b>{name}</b>
      </h3>
      <h4 className="mt-3 flex justify-start items-center gap-2 font-thin tracking-wide">
        <img className="h-4" src={stars} alt="stars" />
        {avgRating} • {sla.slaString}
      </h4>
      <h4 className="mt-3">{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestaurantCard;
