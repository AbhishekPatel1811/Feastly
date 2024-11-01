const mapped = Array.from({ length: 8 }).map((_, i) => {
  return (
    <div
      key={i}
      className="mt-10 w-[20vw] p-4 h-[350px] bg-white shadow-lg rounded-lg animate-pulse flex flex-col items-start gap-4">
      <div className="w-full h-[30vh] rounded-lg bg-gray-300"></div>
      <h3 className="my-[1.2vw] border-4 border-gray-300 rounded-lg w-full h-4"></h3>
      <h4 className="my-[1.2vw] border-4 border-gray-300 rounded-lg w-[8vw] h-4"></h4>
    </div>
  );
});

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      {mapped}
    </div>
  );
};

export default Shimmer;
