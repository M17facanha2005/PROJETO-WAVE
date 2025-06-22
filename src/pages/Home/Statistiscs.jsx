import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiTypescript, SiSvelte } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { DiPython } from "react-icons/di";
import { Stat } from "./components/Stat";

export const Statistics = () => {
  const iconArray = [
    { icon: <AiFillHtml5 size={50} />, value: 70 },
    { icon: <SiCss3 size={40} />, value: 85 },
    { icon: <BiLogoJavascript size={45} />, value: 75 },
    { icon: <DiPython size={45} />, value: 24 },
   
  ];
  return (
    <div className="statistics" id="section">
      <h1 className="title">Skills</h1>
      <div className="progress">
        {iconArray.map((stat, idx) => {
          return <Stat data={stat} key={idx}/>;
        })}
      </div>
    </div>
  );
};