import { useState, useRef, useEffect } from "react";

import AudioControl from "../AudioControl";

import sevenYears from "../../assets/7 Years.mp3";
import styles from "./styles.module.scss";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  return (
    <div className={styles.music_player}>
      <div className={styles.new_single__heading}>
        <h2>new single</h2>
        <p>out now on all platforms</p>
      </div>

      <div className={styles.track__title}>
        <p>Seven years</p>
      </div>

      <AudioControl togglePlayPause={togglePlayPause} />

      <div className={styles.display__track}>
        <audio src={sevenYears} ref={audioRef} />
      </div>
    </div>
  );
}
