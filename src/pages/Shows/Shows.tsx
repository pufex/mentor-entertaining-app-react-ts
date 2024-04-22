import { useMediaContext } from "../../contexts/Media"
import MediaComponent from "../../components/MediaComponent/MediaComponent";
import "./Shows.css"

const Shows = () => {

  const {media} = useMediaContext();

  return <main className="shows__main">
    <section className="section">
      <h1 className="section__heading">
        TV Series
      </h1>
      <section className="section__medias--grid">
        {
          media?.
            filter((item) => item.category == "TV Series").
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
      </section>
    </section>
  </main>
}

export default Shows
