import { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

type Repository = {
  name: string;
  description: string;
  html_url: string;
};

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  //   carregar perguntas
  useEffect(() => {
    fetch("https://api.github.com/users/gsouza97/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
};

export default RepositoryList;
