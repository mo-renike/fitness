import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (exerciseVideos.length === 0) {
    return "Loading Videos...";
  }
  return (
    <div className="details__videos">
      
      <h3>
        Watch  some <span>{name} </span>exercise videos
      </h3>
      <div className="details__videos_list">
        {exerciseVideos.slice(0, 4).map((video, index) => (
          <a
            key={index}
            className="details__videos_item"
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={video.video.thumbnails[0].url} alt={video.video.title} />
            <p>{video.video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
