import Pollution from "./Pollution";
// import WaterPollution from "../Images/WaterPollution";
// import AirPollution from "../Images/AirPollution";
// import NoisePollution from "../Images/NoisePollution";
const ProjectData = [
  {
    id: 1,
    title: "Air Pollution",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit aliquam voluptatum ratione voluptates dolore eos exercitationem excepturi quisquam quis",
    // Img: AirPollution,
  },
  {
    id: 2,
    title: "Water Pollution",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit aliquam voluptatum ratione voluptates dolore eos exercitationem excepturi quisquam quis",
    // Img: WaterPollution,
  },
  {
    id: 3,
    title: "Noise Pollution",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit aliquam voluptatum ratione voluptates dolore eos exercitationem excepturi quisquam quis",
    // Img: NoisePollution,
  },
];

const ProjectInfo = () => {
  return (
    <div>
      <h1>More About the Project</h1>
      <Pollution
        title={ProjectData[0].title}
        Description={ProjectData[0].Description}
        Img={ProjectData[0].Img}
      />
      <Pollution
        title={ProjectData[1].title}
        Description={ProjectData[1].Description}
        Img={ProjectData[1].Img}
      />
      <Pollution
        title={ProjectData[2].title}
        Description={ProjectData[2].Description}
        Img={ProjectData[2].Img}
      />
    </div>
  );
};
export default ProjectInfo;
