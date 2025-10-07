// Video assets registry
// Since videos can't be imported directly as ES modules in Next.js,
// we create a centralized registry for all video sources

export const videos = {
  // Hair transformation videos
  hairTransformation1: "/video/Video-18.mp4",
  hairTransformation2: "/video/Video-66.mp4",
  
  // Styling process videos
  stylingProcess1: "/video/Video-614.mp4",
  stylingProcess2: "/video/Video-987.mp4",
  
  // Before & After videos
  beforeAfter1: "/video/Video-659.mp4",
  beforeAfter2: "/video/Video-371.mp4",
  
  // Hair styling magic videos
  stylingMagic1: "/video/Video-699.mp4",
  stylingMagic2: "/video/Video-847.mp4",
  
  // Additional videos
  tour: "/video/tour.mp4",
} as const

// Type for video keys
export type VideoKey = keyof typeof videos

// Helper function to get video source
export const getVideoSrc = (videoKey: VideoKey): string => {
  return videos[videoKey]
}

// All video sources as array for iteration
export const getAllVideos = () => Object.values(videos)

// Get video by category
export const getVideosByCategory = (category: 'transformation' | 'styling' | 'beforeAfter' | 'magic') => {
  switch (category) {
    case 'transformation':
      return [videos.hairTransformation1, videos.hairTransformation2]
    case 'styling':
      return [videos.stylingProcess1, videos.stylingProcess2]
    case 'beforeAfter':
      return [videos.beforeAfter1, videos.beforeAfter2]
    case 'magic':
      return [videos.stylingMagic1, videos.stylingMagic2]
    default:
      return []
  }
}
