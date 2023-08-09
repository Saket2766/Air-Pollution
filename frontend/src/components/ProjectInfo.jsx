import PollutionType from "./Pollution";
import "../styles/Pollution.css";
import AirPollutionImage from "../Images/AirPollution.jpeg";
import WaterPollutionImage from "../Images/WaterPollution.jpeg";
import NoisePollutionImage from "../Images/NoisePollution.jpeg";

const ProjectData = [
  {
    id: 1,
    title: "Air Pollution",
    Description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, natus sint similique quasi nihil voluptatem obcaecati quos excepturi consequatur illum? Recusandae officia, laudantium dolore dolorum pariatur expedita, harum animi, repellendus aliquam inventore magnam voluptas nisi? Hic obcaecati perferendis quis et.",
    Img: AirPollutionImage,
  },
  {
    id: 2,
    title: "Water Pollution",
    Description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, natus sint similique quasi nihil voluptatem obcaecati quos excepturi consequatur illum? Recusandae officia, laudantium dolore dolorum pariatur expedita, harum animi, repellendus aliquam inventore magnam voluptas nisi? Hic obcaecati perferendis quis et.",
    Img: WaterPollutionImage,
  },
  {
    id: 3,
    title: "Noise Pollution",
    Description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, natus sint similique quasi nihil voluptatem obcaecati quos excepturi consequatur illum? Recusandae officia, laudantium dolore dolorum pariatur expedita, harum animi, repellendus aliquam inventore magnam voluptas nisi? Hic obcaecati perferendis quis et.",
    Img: NoisePollutionImage,
  },
];

const ProjectInfo = () => {
  return (
    <div className="ProjectInfo">
      <h1>More About the Project</h1>
      <div className="PollutionTypes">
        <PollutionType
          title={ProjectData[0].title}
          Description={ProjectData[0].Description}
          Img={ProjectData[0].Img}
        />
        <PollutionType
          title={ProjectData[1].title}
          Description={ProjectData[1].Description}
          Img={ProjectData[1].Img}
        />
        <PollutionType
          title={ProjectData[2].title}
          Description={ProjectData[2].Description}
          Img={ProjectData[2].Img}
        />
      </div>
    </div>
  );
};
export default ProjectInfo;
