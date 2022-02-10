import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

function App() {
  const [projects, setProjects] = useState([]);
  // useState retorna um array com 2 posições
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor
  //    Array  de dependência, contém todas as variáveis presentes dentro da função

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data)
    });
  }, []);
  // 1. Qual função deseja disparar
  // 2. Quando disparar essa função

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
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
