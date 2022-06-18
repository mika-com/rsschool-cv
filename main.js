'use strict'

document.body.addEventListener('click', function(event) {
    if (event.target.id == 'modeBTN') {
        isDark(event.target.dataset);
    }
})

const isDark = (state) => {
    if (state.isDark == 'false') {
        onDark('light');
        state.isDark = true;
    } else {
        onDark('dark');
        state.isDark = false;
    }

}

const onDark = (mod) => {
        document.querySelector('body').id = mod;
        document.querySelector('header').id = mod;
        document.querySelector('footer').id = `${mod}-footer`;
        let innerParmInSection = document.querySelectorAll('.inner-parm-in-section');
        for (let item of innerParmInSection) {item.id = `${mod}-section`}
        let aTag = document.querySelectorAll('a');
        for (let item of aTag) {item.id = `${mod}-a`}
}