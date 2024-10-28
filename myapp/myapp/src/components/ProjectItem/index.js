import "./index.css";

const ProjectItem = (props) => {
  const { projectDetails } = props;
  const { projectId, imageURL, description, title } = projectDetails;
  return <div>
          <div className="imagecontainer"> 
            <img  src={imageURL} alt="avatar" className="image"/>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
  </div>;
};

export default ProjectItem;
