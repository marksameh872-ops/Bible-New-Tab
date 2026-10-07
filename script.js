let lastIndex=-1;
function showVerse(){
  let i;
  do{i=Math.floor(Math.random()*BIBLE_VERSES.length)}while(i===lastIndex&&BIBLE_VERSES.length>1);
  lastIndex=i;
  const v=BIBLE_VERSES[i],el=document.getElementById("verse"),ref=document.getElementById("ref");
  el.style.opacity="0";el.style.transform="translateY(5px)";
  setTimeout(()=>{el.textContent="«"+v.text+"»";ref.textContent=v.reference;el.style.opacity="1";el.style.transform="none"},120);
}
document.getElementById("next").addEventListener("click",showVerse);
document.addEventListener("keydown",e=>{if(e.code==="Space"&&document.activeElement.tagName!=="INPUT"){e.preventDefault();showVerse()}});
showVerse();