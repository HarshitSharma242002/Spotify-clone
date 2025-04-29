// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************

// *********************************************** CARASOUSEL CODE *******************************************************

const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let slideInterval; // To store the interval reference

function updateSlides() {
    const slideWidth = slides[0].offsetWidth + 30; // 30px is the gap
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
}

// Function to move to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
}

// Start auto-slide with interval
function startAutoSlide() {
    // slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 sec
}

// Stop auto-slide and restart after manual click
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// Event Listeners for manual navigation
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide(); // Reset timer
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide(); // Reset timer
});

// Ensure slides update correctly on window resize
window.addEventListener("resize", updateSlides);

// Start auto-sliding on page load
startAutoSlide();

// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************

// ****************************************** NAV MENU EVENT LISTENERS ***************************************************

// navigation active class toggling :
function activateTab(navItem){
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    document.querySelectorAll(".home-tab, .categoty-tab, .artist-tab, .playlist-tab").forEach(tab => {
        tab.style.display = "none";
    });

    let tabToShow;
    if (navItem.classList.contains("fa-house")) {
        tabToShow = document.querySelector(".home-tab");
    } else if (navItem.classList.contains("fa-list")) {
        tabToShow = document.querySelector(".categoty-tab");
    } else if (navItem.classList.contains("fa-user")) {
        tabToShow = document.querySelector(".artist-tab");
    } else if (navItem.classList.contains("fa-music")) {
        tabToShow = document.querySelector(".playlist-tab");
    }

    // Show the selected tab
    if (tabToShow) {
        tabToShow.style.display = "block";
    }

    navItem.classList.add("active");
}

// song categories active class toggling:
function categoryActive(category){
    document.querySelectorAll(".category-item").forEach(item => {
        item.classList.remove("active");
    });
    category.classList.add("active")
}









// Fetch current date and future date: 

let currentDate = new Date();
let futureDate  = new Date();
futureDate.setDate(currentDate.getDate()+5)
let formatDate = currentDate.toDateString();

document.getElementById("Date").innerText = " From : " + formatDate + " - " + futureDate.toDateString();







// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************

// ******************************** Song Toggling and play/pasuse control code : *****************************************

// opening song player on click : 

let openPlayer = 0;
let elements = document.getElementsByClassName("fa-play");

// Convert HTMLCollection to array and add event listener
Array.from(elements).forEach(element => {
    element.addEventListener("click", function() {
        if (openPlayer === 0) {
            openPlayer = 1;
            document.getElementsByClassName("Music-player")[0].style.display = 'flex';
            document.getElementsByClassName("home-tab")[0].style.display = 'none';
            document.getElementsByClassName("back")[0].classList.add("d-block");
            this.classList.remove("fa-play");
            this.classList.add("fa-pause");
        } else {
            openPlayer = 0;
            document.getElementsByClassName("home-tab")[0].style.display = 'block';
            document.getElementsByClassName("back")[0].classList.remove("d-block");
            document.getElementsByClassName("Music-player")[0].style.display = 'none';
            this.classList.remove("fa-pause");
            this.classList.add("fa-play");
        }
    });
});

let back = document.getElementsByClassName("back")[0];
back.addEventListener("click", function() {
    back.classList.remove("d-block");
    document.getElementsByClassName("home-tab")[0].style.display = 'block';
    document.getElementsByClassName("Music-player")[0].style.display = 'none';
});








// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************
// ***********************************************************************************************************************

// ******************************** songs changing and playing/pausing code : *****************************************

let songIndex = 0;
let audioElement = new Audio('assets/Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('seekbar');
let progress = 0;
let playpause_btn = document.getElementsByClassName("play-pause-btn")[0];
let songItems = Array.from(document.getElementsByClassName('footer-song-details'));
let backward = document.getElementsByClassName('fa-step-backward')[0];
let forward = document.getElementsByClassName('fa-step-forward')[0];
let masterSongName = document.getElementById('masterSongName');
let masterSongDetail = document.getElementById('masterSongDetail');
let songImg = document.getElementById("footer-song-img");
let cdImg = document.getElementById("Cd-img");
let songTotalTime = document.getElementsByClassName("total-time")[0];
let songs = [
    {songName : "S T A Y",         songDetail : "Song by Justin Bieber and The Kid LAROI ‧ 2021", artistName : "Justin Bieber and The Kid LAROI", filePath : "assets/Songs/1.mp3",  coverPath : "assets/Photos&Covers/stay.jpg" ,           songDuration : "2:21"},
    {songName : "Blinding Lights", songDetail : "Song by The Weeknd ‧ 2020",                      artistName : "The Weeknd",                      filePath : "assets/Songs/2.mp3",  coverPath : "assets/Photos&Covers/BlindingLights.jpg" , songDuration : "3:19"},
    {songName : "Closer",          songDetail : "Song by The Chainsmokers ‧ 2017",                artistName : "The Chainsmokers",                filePath : "assets/Songs/3.mp3",  coverPath : "assets/Photos&Covers/closer.jpg" ,         songDuration : "4:04"},
    {songName : "SkyFall",         songDetail : "Song by Adele ‧ 2012",                           artistName : "Adele",                           filePath : "assets/Songs/4.mp3",  coverPath : "assets/Photos&Covers/skyfall.jpg" ,        songDuration : "4:46"},
    {songName : "Goosebumps",      songDetail : "Song by Travis Scott ‧ 2016",                    artistName : "Travis Scott",                    filePath : "assets/Songs/5.mp3",  coverPath : "assets/Photos&Covers/goosebumps.jpg" ,     songDuration : "4:10"},
    {songName : "Softcore",        songDetail : "Song by The Neighbourhood ‧ 2018",               artistName : "The Neighbourhood",               filePath : "assets/Songs/6.mp3",  coverPath : "assets/Photos&Covers/softcore.jpg" ,       songDuration : "3:30"},
    {songName : "Sunflower",       songDetail : "Song by Post Malone and Swae Lee ‧ 2018",        artistName : "Post Malone and Swae Le",         filePath : "assets/Songs/7.mp3",  coverPath : "assets/Photos&Covers/sunflower.jpg" ,      songDuration : "2:41"},
    {songName : "Faded",           songDetail : "Song by Alan Walker ‧ 2015",                     artistName : "Alan Walker",                     filePath : "assets/Songs/8.mp3",  coverPath : "assets/Photos&Covers/faded.jpg" ,          songDuration : "3:32"},
    {songName : "Shape of You",    songDetail : "Song by Ed Sheeran ‧ 2017",                      artistName : "Ed Sheeran",                      filePath : "assets/Songs/9.mp3",  coverPath : "assets/Photos&Covers/shapeofYou.jpg" ,     songDuration : "4:23"},
    {songName : "Rockstar",        songDetail : "Song by Post Malone ‧ 2018",                     artistName : "Post Malone",                     filePath : "assets/Songs/10.mp3", coverPath : "assets/Photos&Covers/rockstar.jpg" ,       songDuration : "4:01"},
    {songName : "Mi Gente",        songDetail : "Song by J Balvin and Willy William ‧ 2018",      artistName : "J Balvin and Willy William",      filePath : "assets/Songs/11.mp3", coverPath : "assets/Photos&Covers/migente.jpg" ,        songDuration : "3:43"},
    {songName : "Moonlight",       songDetail : "Song by XXXTentacion ‧ 2018",                    artistName : "XXXTentacion",                    filePath : "assets/Songs/12.mp3", coverPath : "assets/Photos&Covers/moonlight.jpg" ,      songDuration : "2:36"}

];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("h4")[0].innerText = songs[i].songName;
    element.getElementsByTagName("h6")[0].innerText = songs[i].artistName;
    document.getElementsByClassName("total-time")[0].textContent = songs[i].songDuration;
    document.getElementsByClassName("music-cd")[0].src = songs[i].coverPath;
});

// if(parseInt(audioElement.currentTime) == parseInt(audioElement.duration)){
//     console.log("hello");
//     document.getElementsByClassName("home-tab")[0].style.display = 'block';
//     document.getElementsByClassName("Music-player")[0].style.display = 'none';
// }

if(audioElement.paused){
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    
}

// songs changing code : 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `assets/Songs/${songIndex+1}.mp3`;
        masterSongName.textContent = songs[songIndex].songName;
        masterSongDetail.textContent = songs[songIndex].artistName;
        songImg.src = songs[songIndex].coverPath;
        cdImg.src = songs[songIndex].coverPath;
        songTotalTime.innerText = songs[songIndex].songDuration;
        audioElement.currentTime = 0;
        audioElement.load();
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
});

document.getElementById('foreward').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length; // Loop to first song after last
    audioElement.src = songs[songIndex].filePath;
    masterSongName.textContent = songs[songIndex].songName;
    masterSongDetail.textContent = songs[songIndex].artistName;
    songImg.src = songs[songIndex].coverPath;
    cdImg.src = songs[songIndex].coverPath;
    songTotalTime.innerText = songs[songIndex].songDuration;
    audioElement.load();
    audioElement.play();
    masterPlay.classList.replace("fa-play", "fa-pause");
});

document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop to last song when at first song
    audioElement.src = songs[songIndex].filePath;
    masterSongName.textContent = songs[songIndex].songName;
    masterSongDetail.textContent = songs[songIndex].artistName;
    songImg.src = songs[songIndex].coverPath;
    cdImg.src = songs[songIndex].coverPath;
    songTotalTime.innerText = songs[songIndex].songDuration;
    audioElement.load();
    audioElement.play();
    masterPlay.classList.replace("fa-play", "fa-pause");
});

// automate song play

audioElement.addEventListener('ended', () => {
    // Move to the next song
    songIndex = (songIndex + 1) % songs.length; // Loops back to first song after last

    // Update audio source and play
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();  // Load new song
    audioElement.play();

    // Update UI
    masterSongName.textContent = songs[songIndex].songName;
    masterSongDetail.textContent = songs[songIndex].artistName;
    songImg.src = songs[songIndex].coverPath;
    cdImg.src = songs[songIndex].coverPath;
    songTotalTime.innerText = songs[songIndex].songDuration;

    // Change play/pause button
    masterPlay.classList.replace("fa-play", "fa-pause");
});





// *******************************************************************************************************
// *******************************************************************************************************
// *******************************************************************************************************
// handle play/pause click : 

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.replace("fa-play", "fa-pause");
    } else {
        audioElement.pause();
        masterPlay.classList.replace("fa-pause", "fa-play");
    }
});

audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});


myProgressBar.addEventListener ('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});




// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// update time of song in the span:
const currentTimeSpan = document.getElementsByClassName("current-time")[0];

// Function to format the time (in seconds) to MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${minutes}:${sec < 10 ? '0' + sec : sec}`;
}

// Update the span with current time of audio
audioElement.addEventListener('timeupdate', function() {
  currentTimeSpan.innerText = String(formatTime(audioElement.currentTime));
});



// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// Menu toggler : 

let navToggler = document.getElementsByClassName("nav-toggler")[0];
let togglevar = 0;
navToggler.addEventListener('click', () => {
    if(togglevar === 0){
        document.getElementsByClassName("main-nav")[0].classList.replace("collapsed", "un-collapsed");
        togglevar = 1;
    }
    else{
        document.getElementsByClassName("main-nav")[0].classList.replace("un-collapsed", "collapsed");
        togglevar = 0;
    }
});

let navToggler2 = document.getElementsByClassName("nav-toggler-mobile")[0];
let togglevar2 = 0;
navToggler2.addEventListener('click', () => {
    if(togglevar2 === 0){
        document.getElementsByClassName("main-nav")[0].classList.replace("collapsed", "un-collapsed");
        togglevar2 = 1;
    }
    else{
        document.getElementsByClassName("main-nav")[0].classList.replace("un-collapsed", "collapsed");
        togglevar2 = 0;
    }
});