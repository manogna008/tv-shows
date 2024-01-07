import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TvShowDetail/TvShowDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/logo.png";
import { TvShowList } from "./components/TvShowList/TvShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommList, setRecommList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommd(currentTVShow.id);
    }
  }, [currentTVShow]);
  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Something when wrong");
    }
  }
  async function fetchRecommd(tvShowId) {
    try {
      const recommdTVShowList = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommdTVShowList.length > 0) {
        setRecommList(recommdTVShowList.slice(0, 10));
      }
    } catch (error) {
      alert("Something when wrong");
    }
  }

  async function fetchTitle(title) {
    try {
      const searchBytitle = await TVShowAPI.fetchByTitle(title);
      if (searchBytitle.length > 0) {
        setCurrentTVShow(searchBytitle[0]);
      }
    } catch (error) {
      alert("Something when wrong");
    }
  }

  function updateCurrentTvShow(tvShow) {
    setCurrentTVShow(tvShow);
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_shows}>
        {currentTVShow && (
          <TvShowList
            onClickItem={updateCurrentTvShow}
            tvShowList={recommList}
          />
        )}
      </div>
    </div>
  );
}
