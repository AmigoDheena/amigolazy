let amframe = document.querySelectorAll('.amigo-lazy');
for(let i=0; i<amframe.length;i++){
    let amsrc = amframe[i];
    let amdata = amsrc.getAttribute("data-src");
    let datanew = amsrc.getAttribute("lazy");
    setTimeout(function(){
    amframe[i].setAttribute("src",amdata);
}, datanew);
}
