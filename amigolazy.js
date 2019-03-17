let amframe = document.querySelectorAll('.amigo-lazy');
for(let i=0; i<amframe.length;i++){
    let amsrc = amframe[i];
    let amdata = amsrc.getAttribute("data-src");
    let datanew = amsrc.getAttribute("lazy");
    console.log(amdata);
    console.log(datanew);
    setTimeout(function(){
    amframe[i].setAttribute("src",amdata);
}, datanew);
}