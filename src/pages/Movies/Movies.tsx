import { useState } from "react";

import MediaComponent from "../../components/MediaComponent/MediaComponent";
import Search from "../../components/Search/Search";

import { useMediaContext } from "../../contexts/Media"

import "./Movies.css"

const Movies = () => {

  const [search, setSearch] = useState<string>("");

  const {media} = useMediaContext();

  return <main className="movies__main">
    <Search
      placeholder="Search for a movie"
      search={search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
    />
    <h1 className="section__heading">
      Movies
    </h1>
    <section className="section">
      <section className="section__medias--grid">
        {
          media?.
          filter((item) => item.category == "Movie").
          filter((item) => item
            .title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
          ).length > 0
            ? media?.
              filter((item) => item.category == "Movie").
              filter((item) => item
                .title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
              ).
              map((item) => {
                return <MediaComponent
                              id={item.id}
                              isBookmarked={item.isBookmarked}
                              title={item.title}
                              year={item.year}
                              category={item.category}
                              audiences={item.audiences}
                              isTrending={item.isTrending}
                              thumbnail={item.thumbnail}
                              trailer={item.trailer}
                          />
              })
              : <div className="search-fail">
                No movie matched your search!
              </div>
        }
      </section>
    </section>
  </main>
}

export default Movies
