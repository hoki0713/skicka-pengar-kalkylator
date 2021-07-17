import classes from "./Today.module.css";

function Today(props) {
  const { data, className } = props;

  console.log(data);

  return (
    <div className={`${classes.box} ${className}`}>
      <h2>{`Today is ${data.day} day!`}</h2>
      <div>
        {data.contents.map((content) => (
          <>
            <p>{content.title}</p>
            <p>{content.youtube}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default Today;
