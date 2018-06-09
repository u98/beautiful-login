window.onload = () => {
    app.init();
}
let app = {
    container: null,
    list: [],
    ml: null,
    ul: null,
    width: [],
    wiw: window.innerHeight,
    wih: window.innerWidth
}
app.init = function() {
    let i = 0;
    this.container = document.querySelector('.container');
    this.ul = document.querySelector('ul.animation');
    while(i <= 300) {
        i += 20;
        this.width.push(i);
    }
    this.create();
    this.ml = setInterval(this.create, 6000);
    window.requestAnimationFrame(app.loop);
}
app.create = function() {
    let el = document.createElement('li');
    let w = app.width[Math.floor(Math.random() * app.width.length) -1];
    let de = Math.floor(Math.random() * 4) + 1;
    el.style.width = w + 'px';
    el.style.height = w + 'px';
    el.style.top = app.wiw + 350 + 'px';
    el.style.left = Math.floor(Math.random() * app.wih) + 'px';
    app.ul.appendChild(el);
    app.list.push({
        el: el,
        de: de
    });
}
app.loop = function() {
    app.list.forEach((e, i, o) => {
        let px = e.el.style.top;
        px = +px.replace('px','');
        px -= e.de;
        e.el.style.top = px + 'px';
        if (px <= -350) {
            e.el.remove();
            o.splice(i,1)
        }
    })
    window.requestAnimationFrame(app.loop);
    // console.log('dkm123')
}