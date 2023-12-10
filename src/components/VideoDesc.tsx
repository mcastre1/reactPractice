interface VideoDescProps {
  header: string;
  desc: string;
  url: string;
}

export function VideoDesc(props: VideoDescProps) {
  return (
    <>
      <h5 className="m-3">{props.header}</h5>
      <div className="m-3">
        <p>{props.desc}</p>
        <iframe
          width="560"
          height="315"
          src={props.url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p></p>
      </div>
    </>
  );
}
