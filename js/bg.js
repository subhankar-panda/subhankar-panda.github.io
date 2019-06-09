document.addEventListener("DOMContentLoaded", function() {
    const bodyElem = document.querySelector('body');
    let idx = 0
    const colors = ['#fe0000', '#0bff01', '#011efe', '#fe00f6'];
    setInterval(function() {
        bodyElem.style.backgroundColor = colors[idx]
        idx = ++idx % colors.length
    }, 1000)
})