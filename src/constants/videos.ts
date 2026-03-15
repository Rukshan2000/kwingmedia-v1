export const VIDEOS = {
  BG1: '/assets/video/bg1.mp4',
  BG2: '/assets/video/bg2.mp4',
  BG3: '/assets/video/bg3.mp4',
  BG4: '/assets/video/bg4.mp4',
} as const;

export const VIDEO_POSTERS = {
  BG1: '/assets/video/bg1-poster.jpg',
  BG2: '/assets/video/bg2-poster.jpg',
  BG3: '/assets/video/bg3-poster.jpg',
  BG4: '/assets/video/bg4-poster.jpg',
} as const;

export type VideoKey = keyof typeof VIDEOS;
