import { useState } from "react";

import { useMediaContext } from "../../contexts/Media"

import MediaComponent from "../../components/MediaComponent/MediaComponent";
import Search from "../../components/Search/Search";

import "./Shows.css"

const Shows = () => {

  const [search, setSearch] = useState<string>("")

  const {media} = useMediaContext();

  return <main className="shows__main">
    <Search 
      placeholder="Search for a show"
      search={search}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
    />
    <h1 className="section__heading">
      TV Series
    </h1>
    <section className="section">
      <section className="section__medias--grid">
        {
          media?.
          filter((item) => item.category == "TV Series").
          filter((item) => item
            .title
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
          ).length > 0
            ? media?.
              filter((item) => item.category == "TV Series").
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
                No shows matched your search!
              </div>
        }
      </section>
    </section>
  </main>
}

export default Shows
