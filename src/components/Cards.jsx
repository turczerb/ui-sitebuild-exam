import Book from "./Book";

const Cards = (props) => {
  return (
    <ul className="card">
      {props.data.map((data, index) => {
        return (
          <Book
            title={data.title}
            sub={data.sub}
            text={data.text}
            key={index}
            test={index}
          />
        );
      })}
    </ul>
  );
};

export default Cards;
