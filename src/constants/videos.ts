export const VIDEOS = {
  BG1: '/assets/video/bg1.mp4',
  BG2: '/assets/video/bg2.mp4',
  BG3: '/assets/video/bg3.mp4',
  BG4: '/assets/video/bg4.mp4',
} as const;

export type VideoKey = keyof typeof VIDEOS;
