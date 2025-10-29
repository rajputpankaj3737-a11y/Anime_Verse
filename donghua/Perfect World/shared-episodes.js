// shared-episodes.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("episode-list-container");
  if (!container) return;

  fetch("episodeList.html")
    .then(res => {
      if (!res.ok) throw new Error("Failed to fetch episodeList.html");
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
      // Make ep-card keyboard accessible (optional)
      container.querySelectorAll('.ep-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', e => {
          if (e.key === 'Enter') card.click();
        });
      });
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = '<p style="color:#bbb;">Could not load episodes list.</p>';
    });
});