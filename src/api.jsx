import track1 from "./Tracks/track-1.mp3";
import track2 from "./Tracks/track-2.mp3";
import track3 from "./Tracks/track-3.mp3";
import track4 from "./Tracks/track-4.mp3";
import track5 from "./Tracks/track-5.mp3";
import track6 from "./Tracks/track-6.mp3";
import track7 from "./Tracks/track-7.mp3";
import track8 from "./Tracks/track-8.mp3";
import track9 from "./Tracks/track-9.mp3";
import track10 from "./Tracks/track-10.mp3";
import track11 from "./Tracks/track-11.mp3";
import track12 from "./Tracks/track-12.mp3";
import track13 from "./Tracks/track-13.mp3";
import track14 from "./Tracks/track-14.mp3";
import track15 from "./Tracks/track-15.mp3";
import track16 from "./Tracks/track-16.mp3";
import track17 from "./Tracks/track-17.mp3";
import track18 from "./Tracks/track-18.mp3";
import track19 from "./Tracks/track-19.mp3";
import track20 from "./Tracks/track-20.mp3";
const tracks = [
  {
    id: 1,
    title: "Melody X",
    author: "Bonaparte",
    time: "245.76",
    albumcover:
      "https://y.qq.com/music/photo_new/T002R300x300M000003VLqjN0HEUL0_1.jpg",
    sound: track1,
  },
  {
    id: 2,
    title: "Nutshel",
    author: "Alice In Chains",
    time: "297.586939",
    albumcover: "https://i.imgur.com/YMlrLXN.jpg",
    sound: track2,
  },
  {
    id: 3,
    title: "Dark Crow",
    author: "MAN WITH A MISSION",
    time: "273.580408",
    albumcover: "https://i.imgur.com/WaMUj30.png",
    sound: track3,
  },
  {
    id: 4,
    title: "Drown",
    author: "Milet",
    time: "200.280816",
    albumcover: "https://i.imgur.com/5dyhRPk.png",
    sound: track4,
  },
  {
    id: 5,
    title: "Rooster",
    author: "Alice In Chains",
    time: "401.136327",
    albumcover: "https://i.imgur.com/wY7PRC3.jpg",
    sound: track5,
  },
  {
    id: 6,
    title: "The Curse",
    author: "Agnes Obel",
    time: "353.306122",
    albumcover: "https://i.imgur.com/DSUZF3O.jpg",
    sound: track6,
  },
  {
    id: 7,
    title: "Broken Sleep",
    author: "Agnes Obel",
    time: "295.993469",
    albumcover: "https://i.imgur.com/Hkci3WQ.png",
    sound: track7,
  },
  {
    id: 8,
    title: "Louretta",
    author: "Agnes Obel",
    time: "126.014694",
    albumcover: "https://i.imgur.com/JzbJhF1.png",
    sound: track8,
  },
  {
    id: 9,
    title: "Dorian",
    author: "Agnes Obel",
    time: "288.365714",
    albumcover: "https://i.imgur.com/1ccjSG7.png",
    sound: track9,
  },
  {
    id: 10,
    title: "Familiar",
    author: "Agnes Obel",
    time: "236.016327",
    albumcover: "https://i.imgur.com/9R6Bl10.jpg",
    sound: track10,
  },
  {
    id: 11,
    title: "Summer Nigths",
    author: "Siamés",
    time: "233.351837",
    albumcover: "https://i.imgur.com/g6BPRcs.png",
    sound: track11,
  },
  {
    id: 12,
    title: "Do Re Mi",
    author: "Nirvana",
    time: "264.803265",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track12,
  },
  {
    id: 13,
    title: "Gang",
    author: "Jiglr",
    time: "155.324082",
    albumcover:
      "https://i1.sndcdn.com/artworks-fzNSZBJh4gJNBbWs-fj5eoA-t500x500.jpg",
    sound: track13,
  },
  {
    id: 14,
    title: "Dumb",
    author: "Nirvana",
    time: "172.956735",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track14,
  },
  {
    id: 15,
    title: "Pennyroyal Tea",
    author: "Nirvana",
    time: "220.525714",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track15,
  },
  {
    id: 16,
    title: "About A Girl",
    author: "Nirvana",
    time: "218.017959",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track16,
  },
  {
    id: 17,
    title: "Where Did You Sleep Last Night",
    author: "Nirvana",
    time: "305.946122",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track17,
  },
  {
    id: 18,
    title: "Crush on You",
    author: "Next Route",
    time: "221.257143",
    albumcover:
      "https://i1.sndcdn.com/artworks-arBwF5lO89XDXeGd-jzQm0g-t500x500.jpg",
    sound: track18,
  },
  {
    id: 19,
    title: "The Man Who Sold The World",
    author: "Nirvana",
    time: "261.093878",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track19,
  },
  {
    id: 20,
    title: "Come as You are",
    author: "Nirvana",
    time: "225.72",
    albumcover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1034px-Nirvana_album_cover.svg.png",
    sound: track20,
  },
];

export default tracks;
