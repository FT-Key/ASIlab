(function () {
  try {
    var stored = localStorage.getItem('asilab-theme')
    var dark = stored
      ? stored === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    if (dark) document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  } catch (e) {}
})()
