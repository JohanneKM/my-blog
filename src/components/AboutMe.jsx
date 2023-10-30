const AboutMe = (props) => {
  return (
    <>
      <div className="aboutMeClass">
        <h3>{props.aboutTitle}</h3>

        <p>{props.aboutDescription}</p>
      </div>
    </>
  );
};

export default AboutMe;
