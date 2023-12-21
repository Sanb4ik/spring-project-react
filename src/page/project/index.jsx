import './index.css';
import Header from '../../component/header';
import ProjectInfo from '../../component/info-section';
import ProjectsSection from '../../component/projects-section';
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
