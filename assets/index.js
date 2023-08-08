const navbarBtn = document.getElementById('navbar-btn')

navbarBtn.onclick = () => {
    const navbar = document.getElementById('navbar')

    navbar.classList.toggle('navbar--open')
}