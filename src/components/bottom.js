function Bottom(props) {
  const { img, title, price, desc } = props.data;

  return (
    <div>
      <div className="data-container">
        <img src={img} className="image"></img>
        <h5>{title}</h5>
        <p>${price}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Bottom;
