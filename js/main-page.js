var evt = new Event(),
    m = new Magnifier(evt);
    m.attach({
    thumb: '.thumb',
    mode: 'inside',
    zoom: 3,
    zoomable: false,
});