import WheelComponent from "react-wheel-of-prizes";
import "./spinTheWheel.css";

function SpinTheWheel() {
  const segments = [
    "Abrath",
    "Acura",
    "Bentley",
    "Ferrari",
    "Fiat",
    "Ford",
    "Car",
    "BMW",
    "Dacia",
    "Fortuner",
    "Cadillac",
    "Buick",
    "Mini",
    "Lotus",
    "Kia",
    "Nissan",
    "Mercedes-Benz",
    "Land Rover"
  ];
  const segColors = [
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96",
    "#cd4548",
    "#1691d4",
    "#62b48c",
    "#ffa20f",
    "#7b6bb7",
    "#909a8c",
    "#7a1f1f",
    "#d1a365",
    "#114a96"
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1 style={{textAlign:'center', color:'#4caf50'}}>Spin the wheel for exciting Prizes</h1>
      <div className="spin-the-wheel-container">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment="MM"
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={500}
          downDuration={600}
          fontFamily="Helvetica"
        />
      </div>
    </div>
  );
}
export default SpinTheWheel;