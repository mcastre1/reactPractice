import icon from "../teams.svg";
import clip_icon from "../clipboard_icon.svg";

export interface IconDescProps {
  desc: string;
}

export function IconDesc(props: IconDescProps) {
  return (
    <>
      <img src={icon} width={50} height={50} className="m-3" alt=""></img>
      <p>{props.desc}</p>
      <a href="#">
        {" "}
        <img src={clip_icon} alt="" className="p-1"></img>Learn More
      </a>
    </>
  );
}
