import { useState } from "react";

import { useMediaContext } from "../../contexts/Media"

import MediaComponent from "../../components/MediaComponent/MediaComponent";
import Search from "../../components/Search/Search";

import "./Bookmarked.css"

const Bookmarked = () => {

  const [search, setSearch] = useState<string>("")

  const { media } = useMediaContext();

  return <main className="bookmarked__main">
    {
      media?.filter((item) => item.isBookmarked).length > 0 
      ? <Search 
        placeholder="Search through your bookmarked Media"
        search={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      : null
    }
    <h1 className="section__heading">
      Bookmarked
    </h1>
    <section className="section">
      {
        media?.filter((item) => item.isBookmarked).length > 0
          ? <div className="section__medias--grid">
            {
              media?.
              filter((item) => item.isBookmarked).
              filter((item) => item
                .title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
              ).length > 0
                ? media?.
                    filter((item) => item.isBookmarked).
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
                        category={item.category}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        year={item.year}
                        audiences={item.audiences}
                        isBookmarked={item.isBookmarked}
                        isTrending={item.isTrending}
                      />
                    })
                  : <div className="search-fail">
                    Your bookmarks don't match your search
                  </div>
            }
          </div>
          : <div className="empty--message">
            No bookmarked movies or shows!
          </div>
      }
    </section>
  </main>
}

export default Bookmarked
