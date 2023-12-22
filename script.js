let musicContainer = document.getElementById('music-container');

let musicData = [
    {
        "title": "cruel summer",
        "artist": "Taylor Swift",
        "genre": "Pop",
        "releaseYear": 2019,
        "albumCover": "taylor.jpg",
        "youtubeLink": "https://www.youtube.com/watch?v=ic8j13piAhQ"
    },
    {
        "title": "Underneath",
        "artist": "Adam Lambert",
        "genre": "Pop",
        "releaseYear": 2012,
        "albumCover": "adam.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=wcn7BEMFdFg"
    },
    
    {
        "title": "LIAR",
        "artist": "Jake denial",
        "genre": "pop",
        "releaseYear": 2021,
        "albumCover": "jake.jpg",
        "youtubeLink": "https://www.youtube.com/watch?v=pGi-1ZEyLFI"
    },
    {
        "title": "Colors",
        "artist": "Halsey",
        "genre": "Pop",
        "releaseYear": 2018,
        "albumCover": "halsey.jpg",
        "youtubeLink": "https://www.youtube.com/watch?v=JGulAZnnTKA"
    },
    {
        "title": "Demons",
        "artist": "Massane Remix",
        "genre": "Remix, House",
        "releaseYear": 2020,
        "albumCover": "demon.jpg",
        "youtubeLink": "https://www.youtube.com/watch?v=qsuD-WDYlWQ"
    },

  
]

for (let i = 0; i < musicData.length; i++) {
    addAlbum(musicData[i]);
}

function addAlbum (album) {
    let albumElement = document.createElement('div');
    albumElement.classList.add('album');

    let anchor = document.createElement('a');
    anchor.href = album.youtubeLink;
    // Opens the YouTube Link on a New Window
    anchor.target = "_blank";

    let img = document.createElement('img');
    img.src = album.albumCover;

    let content = document.createElement('div');
    content.classList.add('album-content');

    let title = document.createElement('h2');
    title.textContent = album.title;

    let artist = document.createElement('p');
    artist.textContent = album.artist;

    let details = document.createElement('p');
    details.textContent = `${album.genre} |  ${album.releaseYear}`;

    content.appendChild(title);
    content.appendChild(artist);
    content.appendChild(details);

    anchor.appendChild(img);
    albumElement.appendChild(anchor);
    albumElement.appendChild(content);

    musicContainer.appendChild(albumElement);
}