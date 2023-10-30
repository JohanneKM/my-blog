const Footer = (props) => {
  return (
    <>
      <p>Made with React at</p>
      <a href={props.link}>{props.text}</a>
      <p> by {props.student}</p>
    </>
  );
};

export default Footer;
