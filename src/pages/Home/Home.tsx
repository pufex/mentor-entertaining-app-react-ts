import "./Home.css"

import Search from "../../components/Search/Search"
import { useState } from "react"
import { useMediaContext } from "../../contexts/Media"
import MediaComponent from "../../components/MediaComponent/MediaComponent"

const Home = (): React.ReactElement => {
    
    const [search, setSearch] = useState<string>("")

    const searchHandler = () => {}

    const {media} = useMediaContext();

    return <main className="home__main">
        <Search 
            placeholder="Search for movies or TV series"
            search={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            onSearch={searchHandler}
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
                            />
                        })
                }
            </div>
        </section>
    </main>
}

export default Home
