// 1️⃣ Toggling Skills List
document.addEventListener("DOMContentLoaded", function () {
  const allHeadings = document.querySelectorAll("h3");
  allHeadings.forEach((heading) => {
    if (heading.textContent.toLowerCase().includes("skills")) {
      const skillList = heading.nextElementSibling;
      heading.style.cursor = "pointer";

      heading.addEventListener("click", () => {
        if (skillList.style.display === "none") {
          skillList.style.display = "block";
        } else {
          skillList.style.display = "none";
        }
      });
    }
  });
});

//Adding Greeting Based on Time
const greet = document.createElement("p");
const hour = new Date().getHours();
let msg = "";

if (hour < 12) msg = "Good Morning 🌞";
else if (hour < 18) msg = "Good Afternoon ☀️";
else msg = "Good Evening 🌙";

greet.textContent = msg;
greet.style.fontWeight = "bold";
greet.style.marginBottom = "10px";
document.body.prepend(greet);

//Adding Scroll-to-Top Button
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "🔝 Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "6px";
scrollBtn.style.backgroundColor = "#2c3e50";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
