const card = document.querySelector(".as");
const glowElem = document.createElement("span");
glowElem.classList.add("glowElem");
card.append(glowElem);

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    glowElem.style.left = (e.clientX - rect.left) + "px";
    glowElem.style.top = (e.clientY - rect.top) + "px";
});

const card2 = document.querySelector(".as2");
const glowElem2 = document.createElement("span");
glowElem2.classList.add("glowElem2");
card2.append(glowElem2);

card2.addEventListener("mousemove", (e) => {
    const rect = card2.getBoundingClientRect();
    glowElem2.style.left = (e.clientX - rect.left) + "px";
    glowElem2.style.top = (e.clientY - rect.top) + "px";
});
const card3 = document.querySelector(".as3");
const glowElem3 = document.createElement("span");
glowElem3.classList.add("glowElem3");
card3.append(glowElem3);

card3.addEventListener("mousemove", (e) => {
    const rect = card3.getBoundingClientRect();
    glowElem3.style.left = (e.clientX - rect.left) + "px";
    glowElem3.style.top = (e.clientY - rect.top) + "px";
});