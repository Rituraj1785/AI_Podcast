function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const cards = document.querySelectorAll('.card');
    const currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';

    if (currentTheme === 'dark') {
      body.classList.add('light-theme');
      header.classList.add('light-theme');
      cards.forEach(card => card.classList.add('light-theme'));
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      header.classList.remove('light-theme');
      cards.forEach(card => card.classList.remove('light-theme'));
      localStorage.setItem('theme', 'dark');
    }
  }

  // Check for saved theme on page load
  window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      document.querySelector('header').classList.add('light-theme');
      document.querySelectorAll('.card').forEach(card => card.classList.add('light-theme'));
    }
  };

  // Search function to filter podcasts
  function filterPodcasts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }