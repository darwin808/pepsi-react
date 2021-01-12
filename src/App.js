import logo from "./assets/images/logo.png";
import logo2 from "./assets/images/pepsi001.png";
import fb from "./assets/images/facebook.png";
import tw from "./assets/images/twitter.png";
import fg from "./assets/images/instagram.png";
import mini1 from "./assets/images/pepsi001.png";
import mini2 from "./assets/images/pepsi002.png";
import mini3 from "./assets/images/pepsi003.png";
import React from "react";

function App() {
  const [bgcolor, setbgcolor] = React.useState();
  const [imagemain, setimagemain] = React.useState(mini1);
  return (
    <div className="App" style={{ backgroundColor: `${bgcolor}` }}>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="adasda" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Whats New</li>
          <li>New Letter</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="body-container">
        <div className="desc">
          <p id="para1">Thats what i like</p>{" "}
          <p id="para2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Itaque laborum quas, eius aut libero voluptate? Sequi
            asperiores eius dignissimos laudantium!
          </p>
          <button id="btn">View All Products</button>
        </div>
        <div className="logo2">
          {" "}
          <img src={imagemain} alt="qweq" />
        </div>
        <div className="soc-links">
          <img src={fb} alt="1" />
          <img src={tw} alt="2" />
          <img src={fg} alt="3" />
        </div>
      </div>

      <div className="foo">
        <div className="foobar">
          <img
            src={mini1}
            alt="123"
            id="mini1"
            onClick={() => {
              setbgcolor("#0080DB");
              setimagemain(mini1);
            }}
          />
          <img
            src={mini2}
            alt="1213"
            id="mini2"
            onClick={() => {
              setbgcolor("red");
              console.log(bgcolor);
              setimagemain(mini2);
            }}
          />
          <img
            src={mini3}
            alt="12fdfdfdf"
            id="mini3"
            onClick={() => {
              setbgcolor("#0C0E0F");
              setimagemain(mini3);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
