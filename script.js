window.onload = function () {
    document.getElementById('link').addEventListener('mouseover', () => { document.getElementById('audio').play() })
    document.getElementById('link').addEventListener('mouseout', () => { var s = document.getElementById('audio'); s.pause(); s.currentTime = 0; })
    document.getElementById('uwuClickMe').addEventListener('click', () => { document.getElementById('uwuClickMe').parentNode.removeChild(document.getElementById('uwuClickMe')) })
};
