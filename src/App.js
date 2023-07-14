import React from "react";
// import pizza from "./pizzas/funghi.jpg";
import pizzaData from "./data";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>Fast Pizza React co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas=pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu </h2>
      {pizzas&&(
        <ul className="pizzas">
             {pizzaData.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredient={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          />
        ))}
        </ul>
      )}
      
    </main>
  );
}
function Footer() {
  // console.log(pizzaData)
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && ( <div className="order">

        <p>We are open until {closeHour}:00:00 PM.Come visit us or order online.</p>
        <button className="btn">Order Now</button>
      </div>
      )}
    </footer>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={require("./pizzas/spinaci.jpg")}></img>
      {/* <img src="./pizzas/funghi.jpg"/> */}
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}$</span>
      </div>
    </div>
  );
}

export default App;
