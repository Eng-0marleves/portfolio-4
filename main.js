window.addEventListener("scroll",() => {
    const header=document.querySelector(".navbar");
    header.classList.toggle("active",window.scrollY > 0);
    document.querySelector(".bg").classList.toggle("active",window.scrollY > 0);
});

document.getElementById("menue").addEventListener("click", () => { 
    document.querySelector(".nav").classList.toggle("active")
 })
 document.getElementById("close").addEventListener("click", () => { 
     document.querySelector(".nav").classList.remove("active")
})


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `<span> Created By 0marleves </span> &copy; ${Year}`