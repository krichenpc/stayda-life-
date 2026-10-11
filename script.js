// ---------- سنة الفوتر ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- قائمة الهاتف ----------
const burger = document.querySelector(".burger");
const nav = document.querySelector(".site-nav");

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});

// إغلاق القائمة عند النقر على رابط
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

// ---------- تصحيح تمرير القسم بعد الهيدر اللاصق ----------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// ---------- التحقق من الاستمارة ----------
const form = document.getElementById("contactForm");
const msg = form.querySelector(".form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  msg.className = "form-msg";

  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    msg.classList.add("err");
    msg.textContent = "عوّض خانات فارغة.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    msg.classList.add("err");
    msg.textContent = "البريد الإلكتروني غير صحيح.";
    return;
  }

  // هنا تربطها بباك-أند أو خدمة مثل Formspree
  msg.classList.add("ok");
  msg.textContent = "شكرًا! وصلت رسالتك، نتواصل معاك قريب.";
  form.reset();
});
