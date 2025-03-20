import "./Cars.css";

const divStyle = {
  backgroundColor: "red",
  border: "1px solid red",
  width: "15%",
  padding: "10px",
  margin: "2px",
  display: "inline-block",
};

/*
props = {index:"", name:"", year: "", onDelete: "", onEdit: ""}
Destructuring
function Cars({index, name, year, onDelete, onEdit})
*/

export default function Cars(props) {
  return (
    <div style={divStyle}>
      <h3 className="text">Key: {props.index}</h3>
      <h3 className="text">Car Name: {props.name}</h3>
      <h3 className="text">Year: {props.year}</h3>
      <button onClick={() => props.onDelete(props.index)}>Delete</button>
      <button onClick={() => props.onEdit(props)}>Edit</button>
    </div>
  );
}
