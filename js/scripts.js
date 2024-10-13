document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search');
    
    search.onfocus = function() {
        search.style.border = '1.5px solid rgba(38, 164, 203, 0.8)';
    };
    search.onblur = function() {
        search.style.border = '1px solid #ccc';
    };

    const btn = document.getElementById('btn');
    btn.onclick = function(){
        alert('Chức năng chưa làm mà bấm cái gì');
    }
});

