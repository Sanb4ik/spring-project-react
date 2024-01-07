import './index.css';
import Header from '../../components/header';
import ProjectInfo from '../../components/info-section';
import ProjectsSection from '../../components/projects-section';
import Chat from '../../components/chat';
const ProjectPage = () => {
  return (
    <div>
      <Header />
      <ProjectInfo />
      <ProjectsSection />
      <Chat />
    </div>
  );
};

export default ProjectPage;
