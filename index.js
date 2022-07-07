const Box = (props) => {
  //  Write your code here.
  return <p className="text">{props.text}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <div className="small-box">
        <Box text="Small" />
      </div>
      <div className="medium-box">
        <Box text="Medium" />
      </div>
      <div className="large-box">
        <Box text="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
