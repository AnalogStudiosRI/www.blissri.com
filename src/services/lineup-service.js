/* eslint-disable max-len */
const LINEUP = [{
  isHeadliner: true,
  name: 'King Sickabilly Trio',
  bio: '',
  picture: '',
  facebook: '',
  instagram: '',
  website: '',
  spotify: '',
  youtube: '',
  apple: '',
  startTime: null
}, {
  isCoHeadliner: true,
  name: 'Analog',
  bio: 'Analog is a Newport, RI based power trio consisting of guitar, bass and drums.  Strong rock beats, smooth vocals, and loud guitar meld together to create Analog\'s unique sound.',
  picture: '/assets/images/lineup/analog.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/analog.newport/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: '',
  youtube: 'https://www.youtube.com/channel/UCxs5mxoDpmmR0hRbwsxU7Sg',
  apple: '',
  startTime: null
}, {
  isCoHeadliner: true,
  name: 'Bill Bartholomew',
  bio: 'Bill Bartholomew is an indie artist and podcaster. His music has been featured on VICE, Showtime, MTV and many other platforms.',
  picture: '/assets/images/lineup/bill-bartholomew.webp',
  facebook: 'https://www.facebook.com/billbartholomewmusic/',
  instagram: 'https://www.instagram.com/billbartholomew/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: 'https://open.spotify.com/artist/2lTJtrORdzzAfWQulZrkdD',
  youtube: 'https://www.youtube.com/channel/UCEWfrWiFc_6FdOjkdr21wBw',
  apple: 'https://music.apple.com/us/artist/bill-bartholomew/279548573',
  startTime: null
}, {
  isOpener: true,
  name: 'Gabriela Rossi',
  bio: '',
  picture: '',
  facebook: '',
  instagram: '',
  website: '',
  spotify: 'l',
  youtube: '',
  apple: '',
  startTime: null
}, {
  isOpener: true,
  name: 'Thee Phibbs',
  bio: '',
  picture: '',
  facebook: '',
  instagram: '',
  website: '',
  spotify: '',
  youtube: '',
  apple: '',
  startTime: null
}, {
  isOpener: true,
  name: 'Morgan Lane',
  bio: '',
  picture: '',
  facebook: '',
  instagram: '',
  website: '',
  spotify: '',
  youtube: '',
  apple: '',
  startTime: null
}];

function getLineup(options = {}) {
  const { sortByStartOrder } = options;

  if (sortByStartOrder) {
    return [...LINEUP].sort((a, b) => a.startTime < b.startTime ? -1 : 1);
  }

  return LINEUP;
}

export { getLineup };