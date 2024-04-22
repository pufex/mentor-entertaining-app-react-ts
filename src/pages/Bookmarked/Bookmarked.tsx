import "./Bookmarked.css"
import { useMediaContext } from "../../contexts/Media"
import MediaComponent from "../../components/MediaComponent/MediaComponent";

const Bookmarked = () => {

  const { media } = useMediaContext();

  return <main className="bookmarked__main">
    <section className="section">
      <h1 className="section__heading">
        Bookmarked
      </h1>
      {
        media?.filter((item) => item.isBookmarked).length > 0
          ? <div className="section__medias--grid">
            {
              media?.
                filter((item) => item.isBookmarked).
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
