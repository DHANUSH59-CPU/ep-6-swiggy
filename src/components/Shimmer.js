const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(24)].map((_, index) => (
        <div key={index} className="shimmer-card">
          <div className="shimmer-logo"></div>
          <div className="shimmer-title"></div>
          <div className="shimmer-subtitle"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
