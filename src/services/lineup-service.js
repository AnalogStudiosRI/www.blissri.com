/* eslint-disable max-len */

// startTime is in  milliseconds relative to local time (EST)
const LINEUP = [{
  isHeadliner: true,
  name: 'King Sickabilly Trio',
  bio: `KING SICKABILLY from the band, Sasquatch and the Sick-a-Billys never gave up his song-writing mission... keeping real music alive and dangerous in the under-underground.
    A serious songwriter with YEARS of hardship, road experience and inner turmoil.  Bloody fingertips and a soul-haunting voice will deliver you songs about Sin, Love, Murder,
    Tornadoes and drinking until you wake up under a random barstool.`,
  picture: '/assets/images/lineup/king-sickabilly-trio.webp',
  facebook: 'http://www.facebook.com/sickabilly',
  instagram: 'http://www.instagram.com/kingsickabilly',
  website: '',
  spotify: 'https://open.spotify.com/artist/5R1tJ0hOsQmyXVKd8Qsgj4?si=-2GaNV1zSuSRh9brXL4FZA',
  youtube: '',
  apple: '',
  startTime: 1721533500000
}, {
  isCoHeadliner: true,
  name: 'Analog',
  bio: `ANALOG, a rock power trio, has a nostalgic yet original sound.  Dave Flamand&apos;s melodic vocals and brawny guitar licks,
    is paired with Mason Dubois&apos; leathery bass lines then galvanized into one unit by drummer Eli Sprague.  Check out their new album “8 TracK” Released in May 2024`,
  picture: '/assets/images/lineup/analog.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/analog.newport/',
  website: 'https://www.analogstudios.net/artists/1',
  spotify: '',
  youtube: 'https://www.youtube.com/channel/UCxs5mxoDpmmR0hRbwsxU7Sg',
  apple: '',
  startTime: 1721530500000
}, {
  isCoHeadliner: true,
  name: 'Bill Bartholomew',
  bio: `Bill Bartholomew came of age in New York&apos;s underground arts and music world, becoming a fixture of the city's warehouse scene with unique,
    often experimental songwriting and performances. He has been featured on Vice, NPR, EuroNews, PBS, MTV and many other outlets and has shared stages
    with artists including Foy Vance, Elle King and Charlie Crockett, but remains most at home in the alternative music landscape that he cut his teeth in.`,
  picture: '/assets/images/lineup/bill-bartholomew.webp',
  facebook: 'https://www.facebook.com/billbartholomewmusic/',
  instagram: 'https://www.instagram.com/billbartholomew/',
  website: 'http://billbartholomew.com',
  spotify: 'https://open.spotify.com/artist/2lTJtrORdzzAfWQulZrkdD',
  youtube: 'https://www.youtube.com/channel/UCEWfrWiFc_6FdOjkdr21wBw',
  apple: 'https://music.apple.com/us/artist/bill-bartholomew/279548573',
  startTime: 1721527500000
}, {
  isOpener: true,
  name: 'Gabriela Rassi',
  bio: 'Gabriela is a Brazilian-American artist who recently released BENT, her first solo album. She was previously in the NYC/Providence indie band Silverteeth.',
  picture: '/assets/images/lineup/gabriela-rassi.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/gabrielarassi?igsh=eXFwcTNtYmZnMWZi',
  website: '',
  spotify: 'https://open.spotify.com/album/3XO8ctgSpjJ1SnQubTYSfX?si=lmnFxSzlRAm1zXFYfFFEvw',
  youtube: '',
  apple: '',
  startTime: 1721521800000
}, {
  isOpener: true,
  name: 'Thee Phibbs',
  bio: `Thee Phibbs are a Rhode Island based husband and wife duo whose music fuses a traditional debaucherous style of oldfangled folk with a wistful backwater eeriness that 
    ponies up images of candlelit humid New England reverie in a truly unique way. Their debut EP 'Wassergeist' was released in April of 2023 amidst a constant array of local 
    performances in their beloved home region of greater New England.`,
  picture: '/assets/images/lineup/thee-phibbs.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/theephibbs',
  website: 'https://www.theephibbs.bandcamp.com',
  spotify: 'https://open.spotify.com/artist/5iS6rNHN9YH6wS3tjWMB5C',
  youtube: '',
  apple: '',
  startTime: 1721519100000
}, {
  isOpener: true,
  name: 'Morgan Lane and the Passengers',
  bio: `Hailing from Rhode Island, Morgan Johnston is an indie folk singer-songwriter stomping, strumming, speaking, and singing her way to empowering both herself and her listeners.
    Her lyrics are inspired by the natural landscape of places as much as by the emotional landscape of human experiences. While most often found singing with her guitar, Morgan is
    known to experiment with different stringed instruments and tunings as well as vocal arrangements on loop pedal. As a music therapist, she is constantly reminded of the healing
    and community building power of the music she aims to share. Joined by Armand Aromin on body percussion and fiddle, Flannery Brown on cello, Caitlin Gosciminski on upright bass,
    Dovas Lietuvninkas on cornet, and Jessica Kion on harmonies, they make up the band, Morgan Lane and the Passengers.`,
  picture: '/assets/images/lineup/morgan-lane-and-the-passengers.webp',
  facebook: 'https://www.facebook.com/MorganJohnstonMusic/',
  instagram: 'https://www.instagram.com/morganlaneandthepassengers/',
  website: 'https://morganjohnstonmusic.com',
  spotify: 'https://open.spotify.com/artist/0BqKOrMv2UjLyjiSzSXDRu?si=gSIMlCXjQwGsPAzF_P4U2g&nd=1&dlsi=da9f260635ef4a95',
  youtube: 'https://www.youtube.com/user/musicbylane',
  apple: '',
  startTime: 1721524500000
}, {
  isOpener: true,
  name: 'Brian Flamand',
  bio: `Brian Flamand, a high school teacher from the woods of West Greenwich RI, has always been a songwriter and performer.  His signature sound finds a home in your soul and
    instinctively keeps your toes tapping.  Brian plays regularly on the local scene in Newport and is looking forward to recording an album this year.`,
  picture: '/assets/images/lineup/brian-flamand.webp',
  facebook: '',
  instagram: 'https://www.instagram.com/brianflamand/',
  website: '',
  spotify: '',
  youtube: '',
  apple: '',
  startTime: 1721516400000
}];

function getLineup(options = {}) {
  const { sortByStartOrder } = options;

  if (sortByStartOrder) {
    return [...LINEUP].sort((a, b) => a.startTime < b.startTime ? -1 : 1);
  }

  return LINEUP;
}

export { getLineup };