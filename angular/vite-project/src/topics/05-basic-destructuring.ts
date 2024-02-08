// interface AudioPlayer{
//     audioVolume: number;
//     songDuration: number;
//     song: string;
//     details: Details;
// }
// interface Details{
//     author: string;
//     year: number
// }


// const audioPlayer: AudioPlayer = {
//     audioVolume: 90,
//     songDuration: 36,
//     song: "Mess",
//     details: {
//         author: "Ed Sheeran",
//         year: 2015
//     }
// }

// const {songDuration: duration, song, audioVolume: audio, details} = audioPlayer;
// const {author, year} = details;
// console.log('songDuration: ', duration, 'song: ', song, 'audioVolume: ', audio)
// console.log('author ', author, 'year: ', year)

const [,, trunks = 'Not Found']: string[] = ['Goku', 'Vegeta', 'Trunks'];
console.error('Personaje 3: ',trunks)

export{}