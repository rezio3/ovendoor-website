import Button from "../../components/Button";
import Header from "../../components/Header";
import PizzaImg from "../../media/pizza-image.png";
import { routes } from "../../utils/routes";

const SubheaderView = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-1 gap-md-4">
      <img src={PizzaImg} alt="pizza" width={"40%"} />
      <div className="ms-1 ms-lg-5 d-flex flex-column gap-4 align-items-center align-items-md-start">
        <Header
          as="h2"
          className="mb-0 text-center text-md-start mt-0 mt-md-4 mt-lg-0"
        >
          Pierwszy taki smak
          <br /> w Pietrzykowicach i Tyńcu!
        </Header>
        <p className="mb-0 text-center text-md-start">
          Stworzyliśmy miejsce, które udowadnia, że wyjątkowy smak zaczyna się
          od prostych składników i dopracowanego procesu.
        </p>
        <p className="mb-0 text-center text-md-start">
          W Ovendoor Pizza Truck stawiamy na ciasto dojrzewające, autentyczne
          włoskie produkty i wypiek, który wydobywa pełnię smaku. Każdą pizzę
          przygotowujemy na świeżo, bo wierzymy, że jakość czuć już od
          pierwszego kęsa.
        </p>
        <a href={routes.order} target="_blank">
          <Button>Zamów</Button>
        </a>
      </div>
    </div>
  );
};

export default SubheaderView;
