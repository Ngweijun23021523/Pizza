import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { useState } from 'react'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

var orderdata =[
  ]

function Header({ isOpen }) {
  return (
    <>
      <h1 style={{ color: "orange", fontSize: "48px", textTransform: "uppercase" }}>
        Andy's Pizza Co.
      </h1>
      {isOpen && (
        <p style={{ fontSize: "24px", fontStyle: "italic", color: "#555" }}>
          Authentic Italian Cuisine
        </p>
      )}
    </>
  );
}

function Pizza(props) {
  return (
    <div>
       
      <img src={props.image}  />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p> 
      <p>${props.price}</p>
      {props.soldOut ? <p>SOLD OUT</p> : <p>Available</p>}
    </div>
    
  );
}

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredPizzas = pizzaData.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm)
  );
  return (
    
    <div className="menu">
      <h2>Our Menu</h2> 
      <input
        type="text"
        placeholder="Search for a pizza..."
        onChange={handleSearchChange}
        value={searchTerm}
        className="search-bar"
      />

      {filteredPizzas.map((pizza) => (
        <Pizza
          key={pizza.name}
          name={pizza.name}
          image={pizza.photoName}
          ingredients={pizza.ingredients}
          price={pizza.price}
          soldOut={pizza.soldOut}
        />
      ))}

      
    </div>
  );
}

// Footer component with open/closed message based on time
function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <footer className="footer">
      {isOpen ? "We're currently open" : "Sorry we're closed"}
    </footer>
    
  );
}

function Order() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <div className="order-container">
      {isOpen ? <button className="order">Order</button> : null}
    </div>
  );
}



function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Order />
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
