'use strict'

document.body.addEventListener('click', function(event) {
    if (event.target.className = 'darkMode') {
        onDark(event.target.dataset.isdark);
    }
})

const onDark = (state) => {
    if (state) {
        document.querySelector('body').className = 'dark';
        document.querySelector('header').className = 'dark';
        document.querySelector('footer').className = 'dark-footer';
        let innerParmInSection = document.querySelectorAll('.inner-parm-in-section');
        for (let item of innerParmInSection) {item.className += ' dark-section'}
        let aTag = document.querySelectorAll('a');
        for (let item of aTag) {item.className += ' dark-a'}
    }//полная чушь, но уже 6 утра...
}