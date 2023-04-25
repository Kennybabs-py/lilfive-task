import { useState, useRef, useEffect } from "react";

import AudioControl from "../AudioControl";
import AudioProgress from "../AudioProgress";

import sevenYears from "../../assets/7 Years.mp3";
import styles from "./styles.module.scss";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  function togglePlayPause() {
    setIsPlaying((prev) => !prev);
  }

  function onLoadedMetadata() {
    if (audioRef.current && progressRef.current) {
      const seconds = audioRef.current.duration;
      setDuration(seconds);
      progressRef.current.max = String(seconds);
    }
  }

  return (
    <div className={styles.music_player}>
      <div className={styles.new_single__heading}>
        <h2>new single</h2>
        <p>out now on all platforms</p>
      </div>

      <div className={styles.track__title}>
        <p>Seven years</p>
      </div>

      <AudioControl
        togglePlayPause={togglePlayPause}
        setTrackProgress={setTrackProgress}
        progressRef={progressRef}
        audioRef={audioRef}
        duration={duration}
        isPlaying={isPlaying}
      />

      <AudioProgress
        progressRef={progressRef}
        audioRef={audioRef}
        trackProgress={trackProgress}
        duration={duration}
      />

      <div className={styles.display__track}>
        <audio
          src={sevenYears}
          ref={audioRef}
          onLoadedMetadata={onLoadedMetadata}
        />
      </div>
    </div>
  );
}
