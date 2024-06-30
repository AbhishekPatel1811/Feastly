import "./Shimmer.css";

const mapped = Array.from({ length: 8 }).map((e, i) => {
  return (
    <div className="shimmer-card" key={i}>
      <img className="shimmer-img" />
      <h3 className="shimmer-h3"></h3>
      <h4 className="shimmer-h4"></h4>
    </div>
  );
});

const Shimmer = () => {
  return <div className="restaurant-list shimmer-list">{mapped}</div>;
};

export default Shimmer;
