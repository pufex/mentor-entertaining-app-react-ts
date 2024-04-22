import type { MediaType } from "../../contexts/Media"
import "./Bookmark.css"
import { useMediaContext } from "../../contexts/Media"
import { useIconsContext } from "../../contexts/Icons"
import { mergeClasses } from "../../utils/mergeClasses"

type BookmarkProps = {
    id: MediaType["id"],
    active: boolean,
    className: string,
}

const Bookmark = ({
    id,
    active,
    className,
}: BookmarkProps) => {

    const { FaBookmark, FaRegBookmark } = useIconsContext();

    const { switchBookmark } = useMediaContext()

    return <div
        className="bookmark-container"
    >
        <button
            className={mergeClasses(
                "btn", 
                "bookmark__button",
                active ? "active" : "",
                className ? className : ""
            )}
            onClick={() => {
                switchBookmark(id)
            }}
        >
            {
                active 
                    ? <FaBookmark 
                        className="bookmark__bookmark-icon"
                        size={20}
                        />
                        : <FaRegBookmark 
                        className="bookmark__bookmark-icon"
                        size={20}
                    />
            }
        </button>
    </div>

}

export default Bookmark
