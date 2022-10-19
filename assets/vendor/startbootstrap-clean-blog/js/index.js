let svg = document.getElementsByClassName('iconfont')[0];
svg.addEventListener("mouseover", function (event) {
    svg.style.color = '#d32f2f';
    svg.style.fontWeight = 'bold';
}, false);
svg.addEventListener("mouseout", function (event) {
    svg.removeAttribute('style');
}, false);
svg.addEventListener("click", function (envent) {
    window.open('https://github.com/Lx-958/Multi-agent-System');
});
