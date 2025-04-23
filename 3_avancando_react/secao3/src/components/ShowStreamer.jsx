

const ShowStreamer = ({streamerName, streamerChannel}) => {
  return (
    <div>
        <h1>Alerta de Streamer incrível chegando:</h1>
        <p>Sigam o <b>{streamerName}</b> na Twitch: <b>twitch.tv/{streamerChannel}</b></p>
    </div>
  )
}

export default ShowStreamer