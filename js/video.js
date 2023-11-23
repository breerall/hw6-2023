var video = document.querySelector(".video"); // Selecting the video element

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});


//Initialize Video Element
video.autoplay = false; // Turn off autoplay
console.log("Auto play is set to " + video.autoplay);
video.loop = false; // Turn off looping
console.log("Loop is set to " + video.loop);
// Set initial volume to 100%
video.volume = 1.0;
updateVolumeDisplay(); // Update the volume display

//Play Video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});


//Pause Video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});


// Slow down video
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Slow Down Video");
	console.log("Speed is " + video.playbackRate);
});


// Speed up video
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed Up Video");
	console.log("Speed is " + video.playbackRate);
});


// Skip ahead in the video
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 15 > video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime += 15;
	}
	console.log("Skip Ahead");
	console.log("Video current time is " + video.currentTime);
});


// Mute and unmute video
var muteButton = document.querySelector("#mute");
document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted == true){
		video.muted = false;
		muteButton.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		muteButton.innerHTML = "Unmute";
	}
});


// Change volume
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	updateVolumeDisplay(); //Update volume display when slider is moved
	console.log("The Current Value is " + video.volume);
});


// Style with oldSchool class when Old School button is clicked
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});


// Remove oldSchool class for original style when Original button is clicked
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});

//Function to updateVolumeDisplay()

function updateVolumeDisplay() {
    var volumePercentage = Math.round(video.volume * 100);
    document.querySelector("#volume").textContent = volumePercentage + "%";
    document.querySelector("#slider").value = volumePercentage; //Update the slider position
}
