const sunbutton = document.getElementById("sunbutton");
const moonbutton = document.getElementById("moonbutton");
const flyingwitch = document.getElementById("witch");
function starfall() {
    const fallingstar = document.createElement("img");
    fallingstar.src = "https://alexie-web.github.io/MerryBwaghmas/TeamProjectWebsite/Assets/Img/goldgradient8petalstar.png";
    fallingstar.classList.add("star");
    fallingstar.style.left = `${Math.random() * 80 + 10}vw`;
    fallingstar.addEventListener("animationend", () => fallingstar.remove(), { once: true });
    document.body.appendChild(fallingstar);
}
sunbutton.addEventListener('click', () => {
      flyingwitch.classList.toggle('witchfly');
});
moonbutton.addEventListener('click', () =>{
    starfall();
});
