export function showOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.remove('hidden');
}

export function hideOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) overlay.classList.add('hidden');
}
