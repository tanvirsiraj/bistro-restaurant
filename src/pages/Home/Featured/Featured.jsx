import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center px-36 pb-20 pt-10 bg-slate-500 bg-opacity-60">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            sit doloremque est! Voluptatem eaque corporis repellat excepturi
            repudiandae unde quod nostrum, tempora adipisci. Eveniet quos quasi
            quia a fuga unde debitis porro nemo. Consequatur sit rem facilis
            repudiandae, nemo eaque deleniti corrupti error impedit iure ipsa
            nesciunt, minus, quidem atque.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
