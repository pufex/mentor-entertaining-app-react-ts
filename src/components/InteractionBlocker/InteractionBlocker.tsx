import "./InteractionBlocker.css"

type InteractionBlockerOptions = {
    cursor?: string,
    backgroundColor?: string, 
}

type InteractionBlockerProps = {
    options?: InteractionBlockerOptions
}

const InteractionBlocker = ({options}:InteractionBlockerProps): React.ReactElement => {
  return <div 
    className='interaction-blocker'
    style={{
        cursor: options?.cursor ?? "",
        backgroundColor: options?.backgroundColor ?? "",
    }}
  ></div>
}

export default InteractionBlocker
