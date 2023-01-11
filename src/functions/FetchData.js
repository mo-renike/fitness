export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '8b6089ebddmshc744444415dfccbp158bf5jsnc56929b628e8',
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const FetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
