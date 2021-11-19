import "./navBar.css";

export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="leftSide">
        <div className="navButtonsRight">
          <button> Home </button>
          <button> All My Stats</button>
          <button> All My Goals </button>
        </div>
      </div>
      <div className="center">
        <h1> Fitness Tracker </h1>
      </div>
      <div className="rightSide">
        <div className="navButtonsLeft">
          <p> USER </p>
          <image />
          <button> Login </button>
        </div>
      </div>
    </div>
  );
}
