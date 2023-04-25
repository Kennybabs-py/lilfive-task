import {
  MutableRefObject,
  SetStateAction,
  Dispatch,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { MdPause } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";

import styles from "./styles.module.scss";

interface Props {
  togglePlayPause: () => void;
  progressRef: MutableRefObject<HTMLInputElement | null>;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  duration: number;
  setTrackProgress: Dispatch<SetStateAction<number>>;
  isPlaying: boolean;
}
export default function AudioControl(props: Props) {
  const {
    togglePlayPause,
    progressRef,
    duration,
    audioRef,
    setTrackProgress,
    isPlaying,
  } = props;

  const playAnimationRef = useRef<number | null>(null);

  const repeat = useCallback(() => {
    if (playAnimationRef.current && audioRef?.current && progressRef?.current) {
      playAnimationRef.current = requestAnimationFrame(repeat);
      const currentTime = audioRef.current.currentTime;
      setTrackProgress(currentTime);
      progressRef.current.value = String(currentTime);
      if (duration) {
        progressRef.current.style.setProperty(
          "--range-progress",
          `${(parseInt(progressRef.current.value) / duration) * 100}%`
        );
      }
    }
  }, [audioRef, duration, progressRef, setTrackProgress]);

  useEffect(() => {
    if (audioRef.current)
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div
      className={styles.play_pause__btn}
      role="button"
      onClick={togglePlayPause}
    >
      {/* <img src={isPlaying ? MdPause : IoMdPlay} alt="btn" /> */}
      {isPlaying ? <MdPause /> : <IoMdPlay />}
    </div>
  );
}
