import "./Recommendation.css";

const Recommendation = () => {
  return (
    <section className="reommendation-main">
      <h1 className="recommended-title">Recommendation</h1>
      <section className="recommended-flex">
        <button className="recommendation-btns">All Product</button>
        <button className="recommendation-btns">Nike</button>
        <button className="recommendation-btns">Adidas</button>
        <button className="recommendation-btns">Puma</button>
        <button className="recommendation-btns">Vise</button>
      </section>
    </section>
  );
};

export default Recommendation;
