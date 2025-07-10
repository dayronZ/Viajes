import Gallery_portfolio from "./gallery_portfolio";
import Img_portfolio from "./img_portfolio";

const Seccion4 = () => {
  return (
  
    <section className="portfolio-section" id="seccion4">
      <h2 className="portfolio-title">Our trips</h2>
      <div class="portfolio-filters">
        <span class="filter">France</span>
        <span class="filter">England</span>
        <span class="filter">Switzerland</span>
        <span class="filter">Germany</span>
        <span class="filter">Italy</span>
      </div>
      <Gallery_portfolio/>
    </section>
  );
};

export default Seccion4;
