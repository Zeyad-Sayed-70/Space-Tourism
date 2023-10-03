import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TechnologyProvider } from "./style/technology.Styled";
import data_json from "../../data.json";

const Technology = () => {
  const [fade, setFade] = useState<boolean>(true);
  const location = useLocation();
  const index: string = location.search[6] || "0";
  const data = data_json.technology[parseInt(index)] || data_json.crew[0];

  useEffect(() => {
    document.body.classList.add("body-technology");
    return () => {
      document.body.classList.remove("body-technology");
    };
  });

  function onNavigate() {
    setFade(false);
    setTimeout(() => {
      setFade(true);
    }, 1);
  }

  return (
    <TechnologyProvider>
      <header className="header">
        <span>03</span>space launch 101
      </header>
      <article className={fade ? "fadeIn" : ""}>
        <section className="image-container">
          <img className="bg" src={data.images.portrait} alt="technology-img" />
          <img
            className="sm"
            src={data.images.landscape}
            alt="technology-img"
          />
        </section>
        <section className="info-container">
          <nav>
            <Link
              onClick={onNavigate}
              className={index === "0" ? "active" : ""}
              to="/technology?tech=0"
            >
              <span>1</span>
            </Link>
            <Link
              onClick={onNavigate}
              className={index === "1" ? "active" : ""}
              to="/technology?tech=1"
            >
              <span>2</span>
            </Link>
            <Link
              onClick={onNavigate}
              className={index === "2" ? "active" : ""}
              to="/technology?tech=2"
            >
              <span>3</span>
            </Link>
          </nav>
          <section>
            <div>
              <span className="subheading-2">the terminology...</span>
              <h4 className="subheading-1">{data.name}</h4>
            </div>
            <p className="paragraph">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </section>
        </section>
      </article>
    </TechnologyProvider>
  );
};

export default Technology;
