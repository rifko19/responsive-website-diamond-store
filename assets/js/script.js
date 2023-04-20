//ketika klik hamburger muncul navbarNav
const navbarNav = document.querySelector
('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//ketika klik diluar navbarNav maka navbarNav akan disembunyikan
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});


//span text berubah-ubah
const txtElement = ['Sekarang juga!!!' , 'Now!!!' , 'Begancang!!!' , 'Mumpung murah!!!'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ngetik').textContent=words;

    if(words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
    }

    setTimeout(ngetik, 200);

})();