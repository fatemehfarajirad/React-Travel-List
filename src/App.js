import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <div>
      <h1>🌴Far Away🧳</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const newItem = { description, quantity, packed: false, id: Date.now() };
  console.log(newItem);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for you 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item obj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ obj }) {
  return (
    <li>
      <span style={obj.packed ? { textDecoration: "Line-through" } : {}}>
        {obj.quantity}
        {obj.description}{" "}
      </span>
      <button>❌&times</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>you have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}

