document.getElementById("downloadButton").addEventListener("click", () => {
  const toastEl = document.getElementById('downloadToast');
  const bsToast = new bootstrap.Toast(toastEl, { delay: 3000 });
  bsToast.show();
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#mainNav',
  offset: 10
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
  new bootstrap.Tooltip(el, {
    html: true
  });
});


