//Responsivité 
       function showSidebar(){
            const sidebar=document.querySelector('.nav-links')
            sidebar.style.display='flex'
        }
        function hideSidebar(){
            const sidebar=document.querySelector('.nav-links')
            sidebar.style.display='none'
        }
 // ===== Animation des barres horizontales =====
    document.querySelectorAll('.fill').forEach(bar => {
      let target = parseInt(bar.getAttribute('data-width')); // % de remplissage
     let current = 0;
  const duration = 10000; // durée (ms)
  let start = null;

  function animateBar(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1); // 0 → 1
    current = Math.floor(progress * target);
    bar.style.width = current + "%"; // remplit petit à petit

    if (progress < 1) {
      requestAnimationFrame(animateBar);
    }
  }

  requestAnimationFrame(animateBar);
});


// ===== Animation des cercles =====
document.querySelectorAll('.progress').forEach(circle => {
  const percent = parseInt(circle.dataset.percent);
  const r = circle.r.baseVal.value;
  const C = 2 * Math.PI * r;

  circle.style.strokeDasharray = C;
  circle.style.strokeDashoffset = C;

  const svg = circle.ownerSVGElement || circle.parentNode;
  const text = svg.querySelector('text');

  const duration = 10000; // durée (ms)
  let start = null;

  function animateCircle(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1); // 0 → 1
    const current = Math.floor(progress * percent);

    circle.style.strokeDashoffset = C - (current / 100) * C;
    if (text) text.textContent = current + "%";

    if (progress < 1) {
      requestAnimationFrame(animateCircle);
    }
  }

  requestAnimationFrame(animateCircle);
});
