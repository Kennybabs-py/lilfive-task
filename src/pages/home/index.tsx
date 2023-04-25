import homeStyles from "./home.module.css";
import ArtistVectorBg from "../../assets/artist_img_background.png";
import TransparentPlayIcon from "../../assets/transaparent_play_icon.svg";

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
          <img src="" alt="artist_img" />
        </figure>
      </div>
    </section>
  );
}
