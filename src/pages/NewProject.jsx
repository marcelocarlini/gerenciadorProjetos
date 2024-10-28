import ProjectForm from "../components/form/ProjectForm";
import "../partials/pages/_newProject.scss";

const NewProject = () => {
  return (
    <div className="newProject">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" />
    </div>
  );
};

export default NewProject;
