function Fungsi(age){
    let hasil = document.getElementById('input')
    hasil.innerHTML = age
}

function cekAge(FungsiAge , HitungAge){
    let result = ""

    if(FungsiAge >= 75){
        result = 'Selamat Anda Lulus 🎉'
    } else  {
        result = 'Maaf Anda Tidak Lulus 😢'
    }

    HitungAge(result)
}


let btn = document.getElementById('result')


btn.addEventListener('click' , () =>{
    let box = document.getElementById('box').value



    cekAge(box , Fungsi)
})