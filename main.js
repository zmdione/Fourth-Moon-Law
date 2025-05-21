window.onload = ()=> {
    const about = document.getElementById('about');
    const email = document.getElementById('email');
    const comingSoon = document.getElementById('coming-soon');

    setTimeout(()=>{
        about.classList.remove('hidden');
        about.classList.add('fadeIn');
    }, 1500);
    setTimeout(()=>{
        email.classList.remove('hidden');
        email.classList.add('fadeIn');
    }, 2500);
    setTimeout(()=>{
        comingSoon.classList.remove('hidden');
        comingSoon.classList.add('fadeIn');
    }, 4000)
}