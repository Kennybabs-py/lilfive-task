import homeStyles from "./home.module.scss";
import ArtistVectorBg from "../../assets/artist_img_background.png";
import ArtistImg from "../../assets/artist_image.png";
import TransparentPlayIcon from "../../assets/transaparent_play_icon.svg";
import MusicPlayer from "../../components/MusicPlayer";

export default function Home() {
  return (
    <section className={homeStyles.home}>
      <figure className={homeStyles.transparent_play_icon}>
        <img src={TransparentPlayIcon} alt="play" />
      </figure>

      <div className={homeStyles.artist_img_container}>
        <figure className={homeStyles.vector_background}>
          <img src={ArtistVectorBg} alt="vector-bg" />
        </figure>

        <figure className={homeStyles.artist__image}>
          <img src={ArtistImg} alt="artist_img" />
        </figure>
      </div>

      <div className={homeStyles.artist_name}>
        <h1>LIL5IVE</h1>
      </div>

      <div className={homeStyles.music_player__container}>
        <MusicPlayer />
      </div>
    </section>
  );
}
