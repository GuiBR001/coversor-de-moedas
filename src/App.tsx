import { useState } from "react";
import "./App.css";

export const rates: Record<Currency, Rates> = {
  USD: { USD: 1, EUR: 0.92, BRL: 5.42, GBP: 0.78 },
  EUR: { USD: 1.09, EUR: 1, BRL: 5.87, GBP: 0.85 },
  BRL: { USD: 0.18, EUR: 0.17, BRL: 1, GBP: 0.15 },
  GBP: { USD: 1.28, EUR: 1.18, BRL: 6.9, GBP: 1 },
};

function App() {
  console.log("Renderizando...");

  let moedaOrigem: string,
    moedaDestino: string,
    valor: number,
    resultado: number = 0;
  function handleClick() {
    // calcula a conversao

    // moeda origem
    // valor
    // moeda destino
    const taxa = rates[moedaDestino][moedaOrigem];

    console.log("Calculando conversão...", taxa * valor);

    resultado = taxa * valor;
  }

  function onMoedaOrigemChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("onMoedaOrigemChange", e.target.value);
    moedaOrigem = e.target.value;
  }

  function onValorChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("onValorChange", e.target.value);
    valor = e.target.valueAsNumber;
  }

  function onMoedaDestino(e: React.ChangeEvent<HTMLInputElement>) {
    console.log("onMoedaDestino", e.target.value);
    moedaDestino = e.target.value;
  }

  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      <input
        type="text"
        placeholder="Moeda Origem"
        onChange={onMoedaOrigemChange}
      />
      <input
        type="text"
        placeholder="Moeda Destino"
        onChange={onMoedaDestino}
      />
      <input type="number" placeholder="Valor" onChange={onValorChange} />
      <button onClick={handleClick}>Click Me!</button>
      <p>{resultado}</p>
      <footer>© 2025 My App</footer>
    </div>
  );
}

export default App;
