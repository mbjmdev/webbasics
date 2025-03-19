import "./Cars.css";

const divStyle = {
  backgroundColor: "red",
  border: "1px solid red",
  width: "15%",
  padding: "10px",
  margin: "2px",
  display: "inline-block",
};

export default function Cars(props) {
  return (
    <div style={divStyle}>
      <h3 className="text">Car Name: {props.name}</h3>
      <h3 className="text">Year: {props.year}</h3>
    </div>
  );
}
