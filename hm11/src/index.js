window.addEventListener('DOMContentLoaded' , function() {
    "use strict";

    const tabs = require('./js/parts/tabs');
    const setClock = require('./js/parts/timer');
    const modal = require('./js/parts/modal');
    const form = require('./js/parts/form');
    const calc = require('./js/parts/calc');
    const slide = require('./js/parts/slide');


    tabs();
    setClock('timer', '2020-04-13');
    modal();
    form();
    calc();
    slide();

});
