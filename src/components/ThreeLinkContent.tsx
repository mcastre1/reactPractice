interface ThreeLinkContentProps {
  header: string;
  first_url: string;
  first_desc: string;
  second_url: string;
  second_desc: string;
  third_url: string;
  third_desc: string;
}

export function ThreeLinkContent(props: ThreeLinkContentProps) {
  return (
    <>
      <h5 className="m-3">{props.header}</h5>
      <ul style={{ listStyle: "none" }}>
        <li className="mt-3">
          <a href={props.first_url}>{props.first_desc}</a>
        </li>
        <li className="mt-3">
          <a href={props.second_url}>{props.second_desc}</a>
        </li>
        <li className="mt-3">
          <a href={props.third_url}>{props.third_desc}</a>
        </li>
      </ul>
    </>
  );
}
