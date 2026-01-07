// Shared theme + helpers used across pages
(function(){
  function ensureLightThemeInit(){
    if (!document.body.classList.contains('theme-teal') && !document.body.classList.contains('theme-grey')) {
      document.body.classList.add('theme-teal');
    }
    document.body.classList.remove('dark');
  }

  window.cycleColorTheme = function(){
    const b = document.body;
    b.classList.remove('dark');
    if (!b.classList.contains('theme-teal') && !b.classList.contains('theme-grey')) {
      b.classList.add('theme-teal');
    } else if (b.classList.contains('theme-teal')) {
      b.classList.remove('theme-teal');
      b.classList.add('theme-grey');
    } else {
      b.classList.remove('theme-grey');
      b.classList.add('theme-teal');
    }
  };

  window.scrollToTop = function(e){
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  document.addEventListener('DOMContentLoaded', ensureLightThemeInit);
})();
