const photo = document.querySelector('#bigPhoto')
const title = document.querySelector('#photoTitle')
const mignatures = document.querySelectorAll('.thumbnails img')

mignatures.forEach(mignature => {
    mignature.addEventListener('click', ()=>{
        console.log(mignature);

        photo.src = mignature.src.replace( "/200/120", "/600/350")

        title.textContent = mignature.dataset.title

        mignatures.forEach(mignature => {
            mignature.classList.remove('active')
        });

        mignature.classList.add('active')


    })
});    