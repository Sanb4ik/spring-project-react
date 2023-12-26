import './index.css';
import Header from '../../components/header';
import ProjectInfo from '../../components/info-section';
import ProjectsSection from '../../components/projects-section';
const ProjectPage = () => {
  return (
    <div>
      <Header />
      <ProjectInfo />
      <ProjectsSection />
    </div>
  );
};

export default ProjectPage;
