import Header from "../components/Header";
import AlergenList from "../Views/IngredientsView/AlergenList";
import IngredientsSlider from "../Views/IngredientsView/IngredientsSlider";

const IngredientsView = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center my-5">
      <Header
        as="h2"
        className="text-green mb-4 text-uppercase text-center"
        style={{ letterSpacing: 3, fontWeight: 600 }}
      >
        Prawdziwe włoskie smaki
      </Header>
      <IngredientsSlider />
      <AlergenList />
    </div>
  );
};

export default IngredientsView;
