document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('sidebar-root');
  if (!root) return;

  const template = `
<aside class="sidebar" aria-label="Sidebar">
  <img src="public/profile.jpg" alt="Parul Sharma" class="profile-image">
  <div class="name">Parul Sharma</div>
  <div class="role">Bioinformatics Scientist at <a href="https://read-lab-confederation.github.io/">Emergent Lab</a> | <a href="https://med.emory.edu/">Emory University</a></div>
  <nav class="sidebar-nav">
    <a href="index.html">Home</a>
    <a href="cv.html">CV</a>
    <a href="publications.html">Publications</a>
    <a href="research.html">Research</a>
    <a href="mailto:parul.sharma2@emory.edu">Contact</a>
  </nav>
  <div class="social-links">
    <a href="https://scholar.google.co.in/citations?user=_dzInqYAAAAJ&hl=en" title="Google Scholar">
      <i class="fas fa-user-graduate"></i>
    </a>
    <a href="https://github.com/parul-sharma" title="GitHub">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://x.com/parul142" title="Twitter">
      <i class="fab fa-x-twitter"></i>
    </a>
    <a href="https://www.linkedin.com/in/parul-sharma-77152672/" title="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="mailto:parul.sharma2@emory.edu" title="Email">
      <i class="fas fa-envelope"></i>
    </a>
  </div>
</aside>`;

  const inject = (html) => {
    root.innerHTML = html;
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = root.querySelectorAll('.sidebar-nav a');
    links.forEach(a => {
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (href === path) a.setAttribute('aria-current', 'page');
    });
  };

  // If opened via file://, skip fetch to avoid CORS issues and inject directly
  if (location.protocol === 'file:') {
    inject(template);
    return;
  }

  fetch('sidebar.html', { cache: 'no-store' })
    .then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.text();
    })
    .then(html => inject(html))
    .catch(() => inject(template));
});
