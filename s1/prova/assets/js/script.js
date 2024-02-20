const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

next.addEventListener('click', () => {
    movimentar(avancar = true);
});

prev.addEventListener('click', () => {
    movimentar(avancar = false);
});

function movimentar(avancar) {
    const imgAtiva = document.querySelector('.img.active');
    const imgId = Number(imgAtiva.id.split('_')[1]);

    if (avancar) {
        if (imgId != 4) {
            document.querySelectorAll('.img').forEach(img => {
                img.classList.remove('active');
            })
            document.querySelector('#img_' + (imgId + 1)).classList.add('active');

            document.querySelector('#img_' + (imgId)).style.left = '-100vw';
            document.querySelector('#img_' + (imgId + 1)).style.left = '0vw';

            if (document.querySelector('#img_' + (imgId + 2)))
                document.querySelector('#img_' + (imgId + 2)).style.left = '100vw';
        } else {
            document.querySelectorAll('.img').forEach(img => {
                img.classList.remove('active');
            })
            document.querySelector('#img_1').classList.add('active');

            document.querySelector('#img_1').style.left = '0vw';
            document.querySelector('#img_2').style.left = '100vw';
        }
    } else {
        if (imgId != 1) {
            document.querySelectorAll('.img').forEach(img => {
                img.classList.remove('active');
            })
            document.querySelector('#img_' + (imgId - 1)).classList.add('active');

            document.querySelector('#img_' + (imgId)).style.left = '-100vw';
            document.querySelector('#img_' + (imgId - 1)).style.left = '0vw';

            if (document.querySelector('#img_' + (imgId - 2)))
                document.querySelector('#img_' + (imgId - 2)).style.left = '100vw';
        } else {
            document.querySelectorAll('.img').forEach(img => {
                img.classList.remove('active');
            })
            document.querySelector('#img_4').classList.add('active');

            document.querySelector('#img_4').style.left = '0vw';
            document.querySelector('#img_3').style.left = '-100vw';
        }

    }
}

setInterval(() => {
    movimentar(true)
}, 5000);