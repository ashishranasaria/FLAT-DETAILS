document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('flatSelect');
  if (!select) {
    console.error('Dropdown not found!');
    return;
  }

  flats.forEach(flat => {
    const option = document.createElement('option');
    option.value = flat.flat;
    option.textContent = flat.flat;
    select.appendChild(option);
  });
});
