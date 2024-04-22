import { useMediaContext } from "../../contexts/Media"
import MediaComponent from "../../components/MediaComponent/MediaComponent";
import "./Movies.css"

const Movies = () => {

  const {media} = useMediaContext();

  return <main className="movies__main">
    <section className="section">
      <h1 className="section__heading">
        Movies
      </h1>
      <section className="section__medias--grid">
        {
          media?.
            filter((item) => item.category == "Movie").
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

export default Movies
