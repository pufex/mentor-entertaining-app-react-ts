import "./Home.css"

import Search from "../../components/Search/Search"
import { useState } from "react"
import { useMediaContext } from "../../contexts/Media"
import MediaComponent from "../../components/MediaComponent/MediaComponent"

const Home = (): React.ReactElement => {

    const [search, setSearch] = useState<string>("");

    const {media} = useMediaContext();

    return <>
        <main className="home__main">
            <Search
                placeholder="Search for a Movie or TV Show"
                search={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            />
            <section className="section section--trendings">
                <h1 className="section__heading">
                    Trending
                </h1>
                <div className="trendings-container">
                    {
                        media?.
                        filter((item) => item.isTrending).
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
                    }
                </div>
            </section>
            <section className="section ">
                <h1 className="section__heading">
                    Recommended for you
                </h1>
                <div className="section__medias--grid">
                    {
                        media?.
                        filter((item) => item
                            .title
                            .toLowerCase()
                            .includes(
                                search.toLowerCase()
                            )
                        ).length > 0
                            ? media?.
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
                                Nothing matches your Search!
                            </div>
                    }
                </div>
            </section>
        </main>
    </>
}

export default Home
