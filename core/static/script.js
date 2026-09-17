// Alterna entre abas de Login e Cadastro
window.switchAuthTab = function (tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('form-login').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('form-register').classList.add('active');
    }
}

// Simula Login com sucesso e entra no App
window.loginSuccess = function () {
    document.getElementById('page-auth').classList.remove('active');
    document.getElementById('main-nav').style.display = 'flex'; // Mostra a nav
    navigate('home', 'home'); // Vai pra home
}

// Fazer Logout
window.logout = function () {
    document.getElementById('main-nav').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-welcome').classList.add('active');
    document.body.setAttribute('data-theme', 'home');
}

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Navegação Principal via Menu
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-target');
            const themeColor = item.getAttribute('data-theme');

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            navigate(targetId, themeColor);
        });
    });
});

// Ir do Welcome para o Auth
window.showAuth = function () {
    document.getElementById('page-welcome').classList.remove('active');
    document.getElementById('page-auth').classList.add('active');
}

// Função de navegação de páginas (Core)
window.navigate = function (pageId, themeStr = null) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');

    if (themeStr) {
        document.body.setAttribute('data-theme', themeStr);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navegação de Sub-páginas
window.navigateSubPage = function (pageId) {
    navigate(pageId);
}

// Modais
window.openDetails = function (title, desc, guideName, hasCommunity) {
    document.getElementById('detail-title').innerText = title;
    document.getElementById('detail-desc').innerText = desc;
    document.getElementById('detail-guide').innerText = guideName;
    document.getElementById('detail-badge').style.display = hasCommunity ? 'inline-block' : 'none';

    document.getElementById('modal-details').classList.add('active');
}

window.closeModal = function (modalId) {
    document.getElementById(modalId).classList.remove('active');
}