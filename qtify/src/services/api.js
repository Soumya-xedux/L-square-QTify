// 🔥 NEW FILE (API Services)

export async function fetchTopAlbums() {
  const res = await fetch("https://qtify-backend.labs.crio.do/albums/top");
  return res.json();
}

export async function fetchNewAlbums() {
  const res = await fetch("https://qtify-backend.labs.crio.do/albums/new");
  return res.json();
}

export async function fetchSongs() {
  const res = await fetch("https://qtify-backend.labs.crio.do/songs");
  return res.json();
}

export const fetchGenres = async () => {
  const res = await fetch("https://qtify-backend.labs.crio.do/genres");
  return res.json();
};
