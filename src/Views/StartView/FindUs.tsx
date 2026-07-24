import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import MapImg from "../../media/map.jpg";
import "./ImageHover.scss";
import { useLocation } from "react-router";

const FindUs = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      const timer = setTimeout(() => {
        contactRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div
      ref={contactRef}
      className="d-flex flex-column align-items-center"
      style={{ marginBottom: 100 }}
    >
      <Header
        as="h3"
        className="text-uppercase text-green text-center"
        style={{ fontSize: 35, marginBottom: 54 }}
      >
        Gdzie nas znaleźć?
      </Header>
      <div className="w-100 d-flex flex-column flex-md-row align-items-center align-items-md-start gap-5">
        <div className="w-100 w-md-50">
          <a
            href="https://www.google.com/maps/place/Oven+Door+Pizza+Truck/@51.049452,16.8799573,634m/data=!3m1!1e3!4m6!3m5!1s0x470fc1701323cba7:0x15507fdced9402d2!8m2!3d51.0495551!4d16.8797253!16s%2Fg%2F11jr79ppx2?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
            className="image-hover-container"
            target="_blank"
          >
            <img src={MapImg} width="100%" />
            <div className="hover-overlay"></div>
          </a>
        </div>
        <div className="d-flex flex-column align-items-center align-items-md-start w-100 w-md-50 gap-2">
          <Header
            as="h4"
            className="text-green mb-0"
            style={{ fontSize: 21, fontWeight: 700 }}
          >
            Adres:
          </Header>
          <span style={{ fontSize: 21 }} className="text-center text-md-start">
            Przemysłowa 2, <br />
            55-080 Pietrzykowice
          </span>
          <Header
            as="h4"
            className="text-green mb-0"
            style={{ fontSize: 21, fontWeight: 700 }}
          >
            Godziny otwarcia:
          </Header>
          <span style={{ fontSize: 21 }}>codziennie</span>
          <span style={{ fontSize: 21, fontWeight: 700 }}>12:00 - 21:00</span>
          <Header
            as="h4"
            className="text-green mb-0"
            style={{ fontSize: 21, fontWeight: 700 }}
          >
            Kontakt:
          </Header>
          <span style={{ fontSize: 21 }}>+48 730 946 766</span>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
