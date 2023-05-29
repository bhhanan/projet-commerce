const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')


if(bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}





document.querySelectorAll('.pro-container img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'block';
    document.querySelector('.popup-imag img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-imag span').onclick = () =>{
    document.querySelector('.popup-imag').style.display = 'none';
}