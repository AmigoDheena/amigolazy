let amframe = document.querySelectorAll('.amigo-lazy');
for(let i=0; i<amframe.length;i++){
    let amsrc = amframe[i];
    let amdata = amsrc.getAttribute("data-src");
    let datanew = amsrc.getAttribute("lazy");
    if(datanew === null){
        datanew = 1500;
    }
    setTimeout(function(){
    amframe[i].setAttribute("src",amdata);
    console.info(datanew + "ms Lazyloaded " + amframe[i].src);
}, datanew);
}
