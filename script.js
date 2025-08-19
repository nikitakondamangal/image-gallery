const a = document.querySelectorAll(".b");
const b = document.querySelectorAll(".d");
const c = document.querySelector(".e");
const d = document.querySelector(".g");
const e = document.querySelector(".f");
const f = document.querySelector(".i");
const g = document.querySelector(".j");

let h = 0;

a.forEach(k => {
    k.addEventListener("click", () => {
        a.forEach(m => m.classList.remove("active"));
        k.classList.add("active");
        const n = k.getAttribute("data-x");
        b.forEach(o => {
            const p = o.getAttribute("data-x");
            o.style.display = (n === "all" || p === n) ? "block" : "none";
        });
    });
});

b.forEach((q, r) => {
    q.addEventListener("click", () => {
        c.classList.add("show");
        d.src = q.querySelector("img").src;
        h = r;
    });
});

e.addEventListener("click", () => {
    c.classList.remove("show");
});

g.addEventListener("click", () => {
    h = (h + 1) % b.length;
    d.src = b[h].querySelector("img").src;
});

f.addEventListener("click", () => {
    h = (h - 1 + b.length) % b.length;
    d.src = b[h].querySelector("img").src;
});

document.addEventListener("keydown", (t) => {
    if (!c.classList.contains("show")) return;
    if (t.key === "Escape") c.classList.remove("show");
    if (t.key === "ArrowRight") g.click();
    if (t.key === "ArrowLeft") f.click();
});
