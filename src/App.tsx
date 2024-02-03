
import './App.css'
import { AudioClip } from "./types";
import Drum from './assets/drum';


const audioClips: AudioClip[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    descripton: "Heater-1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    descripton: "Heater-2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    descripton: "Heater-3"
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    descripton: "Heater-4"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    descripton: "Clap"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    descripton: "Open-HH"
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    descripton: "Kick-n-Hat"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    descripton: "Kick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    descripton: "Closed-HH"
  },
]

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
      );
      if(!clip) return;

    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.error);

    document.getElementById("drum-" + clip.keyTrigger)?.focus();

    document.getElementById("display")!.innerText = clip.descripton;
};

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1> FCC - Drum Machine</h1>
      <div className="whole-drum">
        { audioClips.map((clip) => (
          <Drum audioClip= {clip} key={audioClips.keyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
    
  )
}

export default App
