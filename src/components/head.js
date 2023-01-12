function Head(props) {
  return (
    <div>
      <div>
        <h2 className="main-head">Our Menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <button type="button" onClick={() => props.category("all")}>
          All
        </button>
        <button type="button" onClick={() => props.category("break")}>
          Breakfast
        </button>
        <button type="button" onClick={() => props.category("lunch")}>
          Lunch
        </button>
        <button type="button" onClick={() => props.category("shake")}>
          Shakes
        </button>
      </div>
    </div>
  );
}
export default Head;
