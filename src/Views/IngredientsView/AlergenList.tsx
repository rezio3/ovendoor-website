import Header from "../../components/Header";
import { alergens } from "../../utils/alergens";

const AlergenList = () => {
  return (
    <div className="w-100 d-flex flex-column gap-3">
      <Header as="h4" className="text-yellow mb-4 mt-5">
        Lista alergenów
      </Header>
      {alergens.map((e) => (
        <div>
          <p className="">
            <strong>{e.header}</strong> - {e.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AlergenList;
