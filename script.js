document.getElementById('button').addEventListener('click',function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.tete').addEventListener('click',function(){
    document.querySelector('.bg-modal').style.display = 'none';
});