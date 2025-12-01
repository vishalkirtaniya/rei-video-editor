// data/videoData.js (or inside Features.jsx)
export const FEATURE_SECTIONS = [
  {
    key: "performance",          // maps to your activeTab values
    label: "Shorts",             // tab label
    format: "shorts",            // your own business label
    videos: [
      {
        id: 1,
        title: "Short 1",
        thumbnail_link: "https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg",
        video_link: "https://www.youtube.com/embed/VIDEO_ID_1",
      },
      {
        id: 2,
        title: "Short 2",
        thumbnail_link: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
        video_link: "https://www.youtube.com/embed/VIDEO_ID_2",
      },
      {
        id: 3,
        title: "Short 3",
        thumbnail_link: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
        video_link: "https://www.youtube.com/embed/VIDEO_ID_3",
      },
    ],
  },
  {
    key: "security",
    label: "Advocate",
    format: "long_form",
    videos: [
      {
        id: 4,
        title: "Advocate 1",
        thumbnail_link: "https://img.youtube.com/vi/VIDEO_ID_4/hqdefault.jpg",
        video_link: "https://www.youtube.com/embed/VIDEO_ID_4",
      },
      // ...
    ],
  },
  {
    key: "network",
    label: "Adverts",
    format: "adverts",
    videos: [
      // ...
    ],
  },
  {
    key: "analytics",
    label: "Music",
    format: "music",
    videos: [
      // ...
    ],
  },
  {
    key: "integration",
    label: "Gaming",
    format: "gaming",
    videos: [
      // ...
    ],
  },
  {
    key: "cash_cow",
    label: "Cash Cow",
    format: "cash_cow",
    videos: [
      // ...
    ],
  },
];
