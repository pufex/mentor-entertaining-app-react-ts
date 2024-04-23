import { createContext, useContext, useEffect, useState } from "react"

type MediaProps = {
    children: React.ReactElement[] | React.ReactElement
}

export type MediaType = {
    id: string,
    title: string,
    year: string,
    category: "Movie" | "TV Series",
    audiences: "PG" | "18+" | "E",
    isTrending: boolean,
    isBookmarked: boolean,
    thumbnail: string,
    trailer: string,
}

export type MediaContextType = {
    media: MediaType[],
    switchBookmark: (id: MediaType["id"]) => void
}

const MediaContext = createContext<MediaContextType | null>(null);

export const useMediaContext = () => {
    const mediaContext = useContext(MediaContext);
    if(!mediaContext)
        throw Error("Can't be used outside a provider.")
    else return mediaContext
}

const Media = ({children}:MediaProps): React.ReactElement => {

    const [media, setMedia] = useState<MediaType[]>([]);

    const switchBookmark = (id: MediaType["id"]) => {
        let newMedia = media.slice();
        newMedia = newMedia.map((item) => {
            console.log(item.id)
            console.log(item.id == id)
            if(item.id == id)
                item.isBookmarked = !item.isBookmarked
            return item
        })
        setMedia(newMedia)
    }

    useEffect(() => {
        fetch("/media.json")
            .then((res) => res.json())
            .then((data) => setMedia(data))
            .catch((err) => console.error(err))
    }, [])

    return <MediaContext.Provider
        value={{
            media: media,
            switchBookmark: switchBookmark 
        }}
    >
        {children}
    </MediaContext.Provider>
}

export default Media
