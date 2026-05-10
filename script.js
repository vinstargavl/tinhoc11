const wrap = document.getElementById('rwWrap');
const loginForm = document.getElementById('loginForm');
const successView = document.getElementById('successView');
const userInput = document.getElementById('userInput');
const passInput = document.getElementById('passInput');
const toggleBtn = document.getElementById('toggleBtn');
const loginBtn = document.getElementById('loginBtn');
const exploreBtn = document.getElementById('exploreBtn');

// ───── Floating coins ─────
const COINS = ['🪙', '⭐', '🎁', '💰'];

function spawnCoin() {
  const coin = document.createElement('div');
  coin.className = 'rw-coin';
  coin.textContent = COINS[Math.floor(Math.random() * COINS.length)];
  coin.style.cssText = `
    left: ${10 + Math.random() * 80}%;
    bottom: ${Math.random() * 30}%;
    animation-delay: ${Math.random() * 1.5}s;
    animation-duration: ${3 + Math.random() * 2}s;
  `;
  wrap.appendChild(coin);
  setTimeout(() => coin.remove(), 6000);
}

setInterval(spawnCoin, 900);

// ───── Toggle password visibility ─────
toggleBtn.addEventListener('click', () => {
  if (passInput.type === 'password') {
    passInput.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passInput.type = 'password';
    toggleBtn.textContent = '👁';
  }
});

// ───── Login handler ─────
function showError(el) {
  el.classList.add('error');
  setTimeout(() => el.classList.remove('error'), 1200);
}

loginBtn.addEventListener('click', () => {
  const u = userInput.value.trim();
  const p = passInput.value.trim();

  if (!u || !p) {
    if (!u) showError(userInput);
    if (!p) showError(passInput);
    return;
  }

  // Show success screen
  loginForm.style.display = 'none';
  successView.style.display = 'block';

  // Burst of coins on login
  for (let i = 0; i < 10; i++) {
    setTimeout(spawnCoin, i * 120);
  }
});

// ───── Explore button ─────
exploreBtn.addEventListener('click', () => {
  alert('Chào mừng đến trang ưu đãi! 🎉');
});
