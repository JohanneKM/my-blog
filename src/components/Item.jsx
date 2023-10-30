const Item = (props) => {
  return (
    <>
      <div className={props.itemClass}>
        <h3>{props.itemTitle}</h3>
        <h4>{props.itemSubtitle}</h4>
        <p>{props.itemDescription}</p>
      </div>
    </>
  );
};

export default Item;
