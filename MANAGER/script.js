const USERS_KEY = 'goodhealth_users';
let currentUser = null;

const getUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];
const saveUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
const setCurrentUser = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
const getCurrentUser = () => {
  const u = localStorage.getItem('currentUser');
  return u ? JSON.parse(u) : null;
};
const logout = () => {
  localStorage.removeItem('currentUser');
  window.location.href = 'login.html';
};

function showAlert(id, msg, type = 'danger') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = `alert alert-${type} mt-3`;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 4000);
}

if (document.getElementById('signupForm')) {
  document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const phone = document.getElementById('phone').value.trim();
    const state = document.getElementById('state').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !phone || !state || !password) {
      return showAlert('signupMessage', 'Please fill all fields.');
    }

    const users = getUsers();
    if (users.some(u => u.email === email)) {
      return showAlert('signupMessage', 'User with this email already exists.');
    }

    users.push({ name, email, phone, state, password });
    saveUsers(users);
    showAlert('signupMessage', 'Sign up successful! Redirecting to login...', 'success');
    setTimeout(() => window.location.href = 'login.html', 1500);
  });
}

if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const password = document.getElementById('password').value;

    if (!email || !password) {
      return showAlert('loginMessage', 'Please enter email and password.');
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return showAlert('loginMessage', 'Invalid email or password.');
    }

    setCurrentUser(user);
    showAlert('loginMessage', 'Login successful! Redirecting...', 'success');
    setTimeout(() => window.location.href = 'dashboard.html', 1000);
  });
}

if (document.getElementById('dashboard')) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
  } else {
    document.getElementById('userEmail').textContent = user.email;
  }
  document.getElementById('logoutBtn').addEventListener('click', logout);
}

document.addEventListener('DOMContentLoaded', () => {
  const getStarted = document.querySelector('.btn-primary-custom');
  const loginBtn = document.querySelector('.btn-outline-custom');

  if (getStarted) {
    getStarted.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'signup.html';
    });
  }
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'login.html';
    });
  }
});