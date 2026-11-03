const button1 = document.getElementById("button1");
const clickSound1 = new Audio("https://alexie-web.github.io/MerryBwaghmas/TeamProjectWebsite/Assets/Mp3/Pop Bubble Sound Effect 2022.mp3");

button1.addEventListener("click", () => {
    clickSound1.currentTime = 0;
    clickSound1.play();
});
const button2 = document.getElementById("button2");
const clickSound2 = new Audio("https://alexie-web.github.io/MerryBwaghmas/TeamProjectWebsite/Assets/Mp3/samsungwaterdrop.mp3");

button2.addEventListener("click", () => {
    clickSound2.currentTime = 0;
    clickSound2.play();
});
const button3 = document.getElementById("button3");
const clickSound3 = new Audio("https://alexie-web.github.io/MerryBwaghmas/TeamProjectWebsite/Assets/Mp3/Water Plop - Sound Effect (HD).mp3");

button3.addEventListener("click", () => {
    clickSound3.currentTime = 0;
    clickSound3.play();
});
