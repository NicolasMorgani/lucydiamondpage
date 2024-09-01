import React from 'react'


const Video = () => {
  return (
    <div><div className="video-responsive">
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/8z88vh-VmVA`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div></div>
  )
}

export default Video