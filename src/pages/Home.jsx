import "../partials/pages/_home.scss";
import LinkButton from "../components/LinkButton";
import projeto from "../assets/Projeto.png";

const Home = () => {
  return (
    <section className="section">
      <h1>
        Bem Vindo ao <span>Gerenciador de Projetos</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo!</p>

      <LinkButton to="/newproject" text="Criar Projeto" />
      <div className="projeto">
        <img src={projeto} alt="projeto" />
      </div>
    </section>
  );
};

export default Home;
