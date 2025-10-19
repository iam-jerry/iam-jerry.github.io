 <script>
    // Small enhancement: set current year and enable simple hash navigation focus
    document.getElementById('year').textContent = new Date().getFullYear();

    // Improve deep-link focus for keyboard users
    if (location.hash) {
      var el = document.querySelector(location.hash);
      if (el) el.tabIndex = -1, el.focus();
    }
  </script>
