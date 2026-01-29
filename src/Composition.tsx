import { AbsoluteFill, Video, staticFile } from 'remotion';




export const MyComposition = () => {
  // Option 1: Files in public/ folder (Recommended for dynamic/large files)
  // If you move your 'video' folder inside 'public/', you can use:
  // const videoSrc = staticFile("video/testvideo.mp4");

  // Option 2: Importing files (Good for assets that are part of the source)
  // import videoSrc from "../../video/my-video.mp4"; 

  // For now, we will show a placeholder text until you add a video.
  return (
    <AbsoluteFill className="bg-gray-100 items-center justify-center">
      <div className="text-3xl font-bold text-center">

      </div>


      <Video src={staticFile("video/testvideo.mp4")} />


    </AbsoluteFill>
  );
};
