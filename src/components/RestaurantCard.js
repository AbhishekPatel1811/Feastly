import { IMG_CDN_URL } from "../constants";
import stars from "../assets/stars.png";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  areaName,
  sla,
}) => {
  return (
    <>
      <div className="w-[18vw] px-2 py-4">
        <img
          className="w-full h-[30vh] object-cover object-bottom rounded-xl drop-shadow-xl"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h3 className="mt-4 text-lg font-bold">{name}</h3>
        <div className="mt-2 flex justify-start items-center gap-2 font-semibold">
          <img className="h-4" src={stars} alt="stars" />
          <h4 className="font-thin tracking-wide">
            {avgRating} • {sla.slaString}
          </h4>
        </div>
        <h4 className="mt-2 text-sm font-normal">{cuisines.join(", ")}</h4>
        <h4 className="mt-2 text-sm font-normal">{areaName}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
