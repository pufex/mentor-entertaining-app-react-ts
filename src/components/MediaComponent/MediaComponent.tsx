import { useIconsContext } from "../../contexts/Icons"
import type { MediaType } from "../../contexts/Media"
import Bookmark from "../Bookmark/Bookmark"
import "./MediaComponent.css"
import { useNavigate } from "react-router-dom"

type MediaComponentProps = MediaType

const MediaComponent = ({
    id,
    title, 
    year, 
    category, 
    audiences,
    isBookmarked,
    thumbnail
}:MediaComponentProps): React.ReactElement => {

    let navigate = useNavigate();

    const {MdMovie, PiTelevisionSimpleFill} = useIconsContext()

    return <div 
        className="media-container"
        onClick={() => navigate(`/trailer/${id}`)}
    >
        <Bookmark
            id={id}
            active={isBookmarked}
            className="bookmark--in-media"
        />
        <img 
            className="media__thumbnail"
            src={thumbnail} 
            alt={title} 
        />
        <div className="media__bottom">
            <section className="media__top-section">
                <span className="media__top media__top--year">
                    {year}
                </span>
                <span className="media__top media__top--category">
                    {
                        category == "Movie"
                            ? <MdMovie 
                                className="media__top-icon"
                            />
                            : <PiTelevisionSimpleFill 
                                className="media__top-icon"
                            />
                    }
                    {category}
                </span>
                <span className="media__top media__top--audiences">
                    {audiences}
                </span>
            </section>
            <section className="media__bottom-section">
                {title}
            </section>
        </div>
    </div>
}

export default MediaComponent
