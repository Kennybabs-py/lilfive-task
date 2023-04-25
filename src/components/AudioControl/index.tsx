import PlayIcon from "../../assets/play_icon.svg";

import styles from "./styles.module.scss";

interface Props {
  togglePlayPause: () => void;
}
export default function AudioControl(props: Props) {
  const { togglePlayPause } = props;

  return (
    <div
      className={styles.play_pause__btn}
      role="button"
      onClick={togglePlayPause}
    >
      <img src={PlayIcon} alt="btn" />
    </div>
  );
}
