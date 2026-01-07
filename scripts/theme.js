// Shared theme + helpers used across pages
(function(){
  function applyPalette(palette){
    const b = document.body;
    b.classList.remove('theme-teal','theme-grey');
    if (palette !== 'theme-teal' && palette !== 'theme-grey') palette = 'theme-teal';
    b.classList.add(palette);
    localStorage.setItem('palette', palette);
  }

  function applyDarkMode(isDark){
    const b = document.body;
    if (isDark) b.classList.add('dark'); else b.classList.remove('dark');
    localStorage.setItem('prefers-dark', isDark ? '1' : '0');
    const btn = document.getElementById('mode-toggle');
    if (btn){
      const icon = btn.querySelector('i');
      if (icon){
        icon.classList.remove('fa-moon','fa-sun');
        icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
      }
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      btn.title = isDark ? 'Light mode' : 'Dark mode';
    }
  }

  function ensureThemeInit(){
    const savedPalette = localStorage.getItem('palette') || 'theme-teal';
    applyPalette(savedPalette);
    const savedDark = localStorage.getItem('prefers-dark') === '1';
    applyDarkMode(savedDark);
  }

  window.cycleColorTheme = function(){
    const b = document.body;
    const next = b.classList.contains('theme-teal') ? 'theme-grey' : 'theme-teal';
    applyPalette(next);
  };

  window.toggleDarkMode = function(){
    const nowDark = !document.body.classList.contains('dark');
    applyDarkMode(nowDark);
  };

  window.scrollToTop = function(e){
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.addEventListener('DOMContentLoaded', ensureThemeInit);
})();
