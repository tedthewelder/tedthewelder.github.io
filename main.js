

window.ondragstart = function() { return false; } 

document.body.onscroll = evt => {
    var scrollTop = window.pageYOffset
    var header = document.getElementById('ted-head')
    var logo = document.getElementById('logo')
    
    if (header.classList.contains('metalguy') && scrollTop >= 20) {
        header.classList.toggle('metalguy')
        header.classList.toggle('nonmetalguy')
        logo.classList.toggle('tedon')
        logo.classList.toggle('tedoff')
    } else if (header.classList.contains('nonmetalguy') && scrollTop < 20) {
        header.classList.toggle('nonmetalguy')
        header.classList.toggle('metalguy')
        logo.classList.toggle('tedoff')
        logo.classList.toggle('tedon')
    }
}
