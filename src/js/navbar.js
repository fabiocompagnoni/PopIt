/**
 * @author Fabio Compagnoni
 * @version 1.0
 */

const closeBtn=document.getElementById("btnCloseNav");
const openBtn=document.getElementById("btnNav");

closeBtn.addEventListener("click",()=>{
    document.getElementsByClassName("showNavMobile")[0].style.display="none";
});
openBtn.addEventListener("click",()=>{
    document.getElementsByClassName("showNavMobile")[0].style.display="block";
});