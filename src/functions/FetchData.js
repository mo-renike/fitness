export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "dcee4d4056mshd7860806d622e3fp145d76jsn928e3f08f8b8",
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
