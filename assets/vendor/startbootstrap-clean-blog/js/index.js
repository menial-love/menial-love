let svg = document.getElementsByClassName('iconfont')[0];
console.log(svg);
svg.addEventListener("mouseover", function (event) {
    console.log("mouseover");
    svg.style.color = '#4775f1';
    svg.style.fontWeight = 'bold';
}, false);
svg.addEventListener("mouseout", function (event) {
    console.log("mouseout");
    svg.removeAttribute('style');
}, false);
svg.addEventListener("click", function (envent) {
    window.open('https://github.com/Lx-958/Multi-agent-System');
});
