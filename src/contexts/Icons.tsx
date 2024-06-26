import { createContext, useContext } from "react"
import { SiWindows11 } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import type { IconType } from "react-icons";

export type IconsProps = {
    children: React.ReactElement | React.ReactElement[]
}

export type IconsContextType = {
    SiWindows11: IconType,
    MdLocalMovies: IconType,
    MdMovie: IconType,
    PiTelevisionSimpleFill: IconType,
    FaBookmark: IconType,
    FiSearch: IconType,
    FaRegBookmark: IconType,
    FaPlay: IconType,
    FaPause: IconType,
    IoPlayBack: IconType,
    IoPlayForward: IconType,
}

export const IconsContext = createContext<IconsContextType | null>(null);

export const useIconsContext = () => {
    const iconsContext = useContext(IconsContext);
    if(!iconsContext)
        throw Error("Cannot use outside a provider.")
    else return iconsContext;
}

const Icons = ({children}:IconsProps) => {
  return <IconsContext.Provider
    value={{
        SiWindows11: SiWindows11,
        MdLocalMovies: MdLocalMovies,
        MdMovie: MdMovie,
        PiTelevisionSimpleFill: PiTelevisionSimpleFill,
        FaBookmark: FaBookmark,
        FiSearch: FiSearch,
        FaRegBookmark: FaRegBookmark,
        FaPlay: FaPlay,
        FaPause: FaPause,
        IoPlayBack: IoPlayBack,
        IoPlayForward: IoPlayForward,
    }}
  >
    {children}
  </IconsContext.Provider>
}

export default Icons
