document.body.onload = function() {
    document.body.style = "overflow: hidden";
    setTimeout(function() {
        
        let preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done') )
    {
        preloader.classList.add('done');
        document.body.style = "overflow: visible";
    }
    },1500);
};