import { MutableRefObject } from "react";

import styles from "./styles.module.scss";
import { formatTime } from "../../helpers/formatTime";

interface Props {
  progressRef: MutableRefObject<HTMLInputElement | null>;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  trackProgress: number;
  duration: number;
}

export default function AudioProgress(props: Props) {
  const { progressRef, audioRef, trackProgress, duration } = props;

  function handleProgressChange() {
    if (progressRef.current && audioRef.current) {
      audioRef.current.currentTime = parseInt(progressRef.current.value);
      console.log(progressRef.current.value);
    }
  }

  return (
    <div className={styles.audio_progress}>
      <span className="time current">{formatTime(trackProgress)}</span>
      <input
        type="range"
        ref={progressRef}
        defaultValue="0"
        onChange={handleProgressChange}
      />
      <span className="time">{formatTime(duration)}</span>
    </div>
  );
}
