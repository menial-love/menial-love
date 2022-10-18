let svg = document.getElementsByClassName('iconfont')[0];
svg.addEventListener("mouseover", function (event) {
    svg.style.color = '#4775f1';
    svg.style.fontWeight = 'bold';
}, false);
svg.addEventListener("mouseout", function (event) {
    svg.removeAttribute('style');
}, false);
