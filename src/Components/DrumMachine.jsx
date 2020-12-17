import React from "react";
import './DrumMachine.scss';

const sounds = [
  {
    key: "Q",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    key: "W",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    key: "E",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    key: "A",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    key: "S",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    key: "D",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    mp3: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

function App() {
  return (
    <div id="display" className="display">
      <h1>'x' sonido</h1>
      {sounds.map((sound, idx) => (
        <DrumPad text={sound.key} key={idx} audio={sound.mp3} />
      ))}
    </div>
  )
}

class DrumPad extends React.Component{
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });
  }

  playSound = () => {
    this.audio.current.play();

    const id = this.audio.current.id;

    const parent = this.audio.current.parentNode;
    parent.classList.add("active");

    const display = parent.parentNode;
    display.querySelector("h1").innerText = `'${id}' este es su sonido`;
  };

  render() {
    const { text, audio } = this.props;

    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum-${text}`}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text} />
      </div>
    );
  }
}

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);

  if (audio) {
    const parent = audio.parentNode;
    parent.classList.add("active");

    const display = parent.parentNode;
    display.querySelector("h1").innerText = `'${id}' este es su sonido`;

    audio.play();
  }
});

export default App;

// ReactDOM.render(<App />, document.getElementById("drum-machine"));