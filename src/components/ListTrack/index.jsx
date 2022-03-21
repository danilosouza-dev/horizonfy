import { Container } from "./styles";

export function ListTrack({ tracks }) {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Tempo</th>
          </tr>
        </thead>

        <tbody>
          {tracks.map((track, key) => (
            <tr key={key}>
              <td>{track.track_number}</td>
              <td>{track.name}</td>
              <td>{millisToMinutesAndSeconds(track.duration_ms)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
