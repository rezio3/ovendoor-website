import Header from "../../components/Header";

const HeaderView = () => {
  return (
    <>
      <Header
        as="h2"
        className="text-yellow text-center"
        style={{ fontSize: 32, fontWeight: 400 }}
      >
        JAKOŚĆ NA PIERWSZYM MIEJSCU!
      </Header>
      <Header
        as="h1"
        className="text-yellow text-center"
        style={{ fontSize: 32, fontWeight: 700, marginTop: 4 }}
      >
        PIZZA PROSTO Z PIECA
      </Header>
      <span
        style={{
          fontWeight: 600,
          fontSize: 22,
          letterSpacing: 1,
          marginTop: 16,
        }}
        className="text-center"
      >
        Zapraszamy codziennie w godzinach 12:00 - 21:00.
      </span>
    </>
  );
};

export default HeaderView;
