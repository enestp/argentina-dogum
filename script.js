// Header küçülme
window.addEventListener("scroll",()=>{
  document.getElementById("header")
    .classList.toggle("shrink",window.scrollY>80);
});

// Fade animasyon
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});
document.querySelectorAll(".fade").forEach(el=>observer.observe(el));

function copyMail(){
  navigator.clipboard.writeText("ilkadimarjantin@gmail.com");
  alert("Mail adresi kopyalandı");
}

function sendMail(e){
  e.preventDefault();

  const email = "ilkadimarjantin@gmail.com";
  const subject = encodeURIComponent("Arjantin’de Doğum Hakkında Bilgi");
  const body = encodeURIComponent(
    "Merhaba,\n\n" +
    "Arjantin’de doğum süreci hakkında detaylı bilgi almak istiyorum.\n\n" +
    "İyi çalışmalar."
  );

  // Önce klasik mail uygulamasını dene
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

  // 600ms sonra Gmail web’e zorla (mail app yoksa)
  setTimeout(()=>{
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`,
      "_blank"
    );
  },600);
}

