import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  // useState retorna um array com 2 posições
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    // Imutabilidade -> copia as informações do array e adiciona as novas informações
    // spread operator ([...array], {...object}) -> percorre o elemento e copia cada posição/chave do elemento
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Project" />
      <img width={300} src={backgroundImage} />
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
