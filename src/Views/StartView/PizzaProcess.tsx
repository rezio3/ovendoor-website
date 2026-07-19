import Pizza1 from "../../media/doughImg1.jpg";
import Pizza2 from "../../media/doughImg2.jpg";
import Pizza3 from "../../media/doughImg3.jpg";

const PROCESS_SECTION = [
  {
    img: Pizza1,
    detailsText: `<p>Ciasto na pizzę przygotowujemy sami od początku 
    do końca. Opracowaliśmy recepturę, która dzięki długiemu dojrzewaniu 
    ciasta sprawia, że pizza smakuje lepiej i jest delikatniejsza.</p><p>Dojrzewanie 
    ciasta nadaje mu nie tylko smak, ale i odpowiednią strukturę. Nasza pizza ma 
    średnicę około 32 cm, każda wykręcana jest ręcznie.</p>`,
  },
  {
    img: Pizza2,
    detailsText: `<p>Sos do pizzy przygotowujemy 
z włoskich pomidorów pelati o pełnym 
i intensywnym smaku, dlatego wymaga dodania jedynie odrobiny soli 
i oliwy extra virgin.</p><p>Do pizzy używamy mozzarelli fior di late oraz długo dojrzewających 
wędlin i serów.</p><p> Przygotowaliśmy klasyczne kompozycje smakowe, jak i kilka naszych autorskich propozycji, 
a każdego miesiąca jest też dostępna inna pizza sezonowa.</p>`,
  },
  {
    img: Pizza3,
    detailsText: `<p>Oprócz receptury na ciasto naszym kolejnym 
    powodem do dumy jest piec do pizzy.</p><p>Pracujemy na najwyższej 
    jakości piecu marki Moretti Forni, który gwarantuje niezawodność i 
    powtarzalność wypieku, dzięki czemu każda pizza będzie równo wypieczona.</p>`,
  },
];

const PizzaProcess = () => {
  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-start justify-content-md-between align-items-center align-items-md-start w-100 mb-5"
      style={{ marginTop: "80px" }}
    >
      {PROCESS_SECTION.map((e) => {
        return (
          <div style={{ width: "326px", padding: "0 8px", marginBottom: 24 }}>
            <img src={e.img} width="100%" />
            <div
              dangerouslySetInnerHTML={{ __html: e.detailsText }}
              className="text-center mt-md-5 mt-4"
              style={{ fontSize: "14px", fontWeight: 500 }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default PizzaProcess;
