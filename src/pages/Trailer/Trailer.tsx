import { useEffect, useState, useRef, forwardRef } from "react"
import { useParams } from "react-router-dom"

import ReactPlayer from "react-player"
import InteractionBlocker from "../../components/InteractionBlocker/InteractionBlocker"

import { useMediaContext } from "../../contexts/Media"
import { useIconsContext } from "../../contexts/Icons"

import { mergeClasses } from "../../utils/mergeClasses"

import "./Trailer.css"
import "./Slider.css"

type VideoStateType = {
    title: string,
    playing: boolean,
    loop: boolean,
    url: string,
    played: number,
    seeking: boolean,
}

const Trailer = ():React.ReactElement => {

    const VideoRef = useRef<HTMLVideoElement | null>(null);

    const [
        blockBySlider,
        setBlockBySlider
    ] = useState<boolean>(false);

    const {id} = useParams();
    const { media } = useMediaContext()

    const pieceOfMedia = media?.find((item) => item.id == id) 

    const [videoState, setVideoState] = useState<VideoStateType>({
        title: pieceOfMedia?.title ?? "",
        url: pieceOfMedia?.trailer ?? "",
        playing: false,
        played: 0,
        loop: false,
        seeking: true,
    })

    useEffect(() => {
        setVideoState({...videoState, 
            title: pieceOfMedia?.title ?? "",
            url: pieceOfMedia?.trailer ?? "",
        })
    }, [media])

    const { title, url, playing, loop } = videoState

    const playPauseHandler = () => {
        setVideoState({...videoState,
            playing: !playing
        })
    }

    const grabbedHandler = (
        e: MouseEvent,
        width: number,
        left: number,
    ) => {
        const mouseX = e.clientX

        if(mouseX < left)
            setVideoState({...videoState,
                played: 0,
            })
        else if(left + width < mouseX)
            setVideoState({...videoState,
                played: 1,
            })
        else{
            const newProgress = (mouseX-left)/width
            console.log(newProgress)
            setVideoState({...videoState,
                played: newProgress,
            })
        }
    }

    const ungrabHandler = () => {
        window.removeEventListener(
            "mousemove", () => grabbedHandler 
        )
        window.removeEventListener(
            "mouseup", ungrabHandler
        )
        setVideoState({...videoState,
            playing: true,
            seeking: false,
        })
        setBlockBySlider(false)
    }

    const seekerGrabHandler = (width: number, left: number) => {
        setVideoState({...videoState,
            playing: false
        })
        setBlockBySlider(true)
        window.addEventListener(
            "mousemove", (e) => grabbedHandler(e, width, left)
        )
        window.addEventListener("mouseup", ungrabHandler)
    }

    return <>
        <main className="trailer__main">
            {
                blockBySlider 
                    ? <InteractionBlocker 
                        options={{
                            cursor: "grabbing"
                        }}
                    />
                    : null
            }
            <VideoPlayer
                ref={VideoRef}
                title={title}
                url={url}
                playing={playing}
                loop={loop}
                onSeekerGrab={seekerGrabHandler}
                onPlayPause={playPauseHandler}
            />
        </main>
    </>
}

export default Trailer

type VideoPlayerProps = VideoStateType & {
    ref: React.MutableRefObject<HTMLVideoElement> | null,
    onSeekerGrab: (width: number, left: number) => void,
    onProgress: () => void,
    onEnded: () => void,
    onPlayPause: () => void,
    onBackwards: () => void,
    onForwards: () => void,
}

const VideoPlayer = forwardRef(({
        title, 
        playing, 
        played,
        loop, 
        url,
        onSeekerGrab,
        onEnded,
        onPlayPause,
        onBackwards,
        onForwards,
    } :VideoPlayerProps,
    ref) => {
    const {
        FaPlay,
        FaPause,
        IoPlayBack,
        IoPlayForward,
    } = useIconsContext()

    return <div className="player__container">
        <ReactPlayer
            ref={ref}
            playing={playing}
            loop={loop}
            url={url}
            onEnded={onEnded}
            controls={false}
            height={"100%"}
            width={"unset"}
        />
        <div className="player--top">
            <h1 className="player__title">
                {title}
            </h1>
        </div>
        <div className="player--bottom">
            <div className="player--bottom__content">
                <div className="player__controls player__controls--left">
                    <Slider 
                        className="player__seeker"
                        progress={played}
                        onGrab={onSeekerGrab}
                    />
                    <button 
                        className="player__control player__control--backward"
                        onClick={onBackwards}
                    >
                        <IoPlayBack
                            className="player__icon player__forward-icon"
                            size={30}
                        />
                    </button>
                    <button 
                        className={
                            mergeClasses(
                                "player__control",
                                "player__control--play-pause",
                                playing ? "active" : ""
                            )
                        }
                        onClick={onPlayPause}
                    >
                        {
                            !playing 
                                ? <FaPlay
                                    className="player__icon player__play-icon"
                                />
                                : <FaPause
                                    className="player__icon player__pause-icon"
                                    size={25}
                                />
                        }
                    </button>
                    <button 
                        className="player__control player__control--backward"
                        onClick={onForwards}
                    >
                        <IoPlayForward
                            className="player__icon player__forward-icon"
                            size={30}
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
})

type SliderProps = {
    className: string,
    progress: number,
    onGrab: (width: number, left: number) => void,
    onFillersClick: () => void
}

const Slider = ({
    className,
    progress,
    onGrab,
    onFillersClick,
}:SliderProps) => {

    const SliderRef = useRef<HTMLDivElement | null>(null);
    const FilledRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        console.dir(SliderRef.current)
    }, [SliderRef.current])

    return <div 
        ref={SliderRef}
        className={
            mergeClasses(
                "slider",
                className ?? ""
            )
        }
        onClick={onFillersClick}
    >
        <div
            ref={FilledRef}
            className="slider__filled"
        >
            <div 
                className="slider__circle"
                onMouseDown={() => {
                    const currentWidth = SliderRef.current?.clientWidth!
                    const currentLeft = SliderRef.current?.clientLeft!
                    console.log(currentWidth, currentLeft)
                    onGrab(currentWidth, currentLeft)
                }}
            ></div>
        </div>
        <div className="slider__to-fill"></div>
    </div>
}