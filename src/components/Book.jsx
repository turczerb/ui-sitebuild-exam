const Book = (props) => {
  return (
    <div className="book-div">
      <span className="num">{props.test + 1}</span>
      <div className="book-contents">
        <h2 className="book-title">{props.title}</h2>
        <h1 className="book-sub">{props.sub}</h1>
        <p className="book-text">{props.text}</p>
      </div>
      <button className="book-btn">read more</button>
    </div>
  );
};

export default Book;
