// 🔥 NEW FILE: Songs.jsx
import Section from "../Section/Section";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const Songs = ({ songs }) => {
  return (
    <Section title="Songs">
      <Carousel>
        {songs.map((song, index) => (
          <Card
            key={index}
            imgLink={song.image}
            albumName={song.title}
            follow={song.likes}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default Songs;
