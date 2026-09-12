// ===== Dark mode toggle =====
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (isDark) {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '☾';
  } else {
    root.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀';
  }
});

// ===== Contact form (front-end only demo) =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Catatan: form ini belum terhubung ke server/email.
  // Untuk mengirim pesan sungguhan, hubungkan ke layanan seperti
  // Formspree, EmailJS, atau backend Anda sendiri.
  note.textContent = 'Terima kasih! Pesan Anda telah dicatat (form ini masih demo, sambungkan ke backend/EmailJS untuk pengiriman sungguhan).';
  form.reset();
});
