import s from "./style.module.css";
import { SMALL_IMG_COVER_URL } from "../../config";
export function TvShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div onClick={onClick_} className={s.container}>
      <img
        src={SMALL_IMG_COVER_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
