const element=document.querySelector('a[href="/reels/"]')
// Remove the element if it exists
if (element) {
    element.remove();
  }

  const mainElements = document.querySelectorAll('.x1qjc9v5.x9f619.x78zum5.xg7h5cd.xl56j7k.x1xfsgkm.xqmdsaz.x1bhewko.xgv127d.xh8yej3');
  mainElements.forEach((element) => {
    element.remove();
});
const anchors = document.querySelectorAll('a[title="Shorts"]');
anchors.forEach((element) => {
    element.remove();
});
const shortContainer=document.getElementById('shorts-container');
if(shortContainer){
    shortContainer.remove();
}

const observer = new MutationObserver(() => {
    const anchors = document.querySelectorAll('a[title="Shorts"]');
    anchors.forEach((element) => {
        element.remove();
    });
    
    const mainElements = document.querySelectorAll('.x1qjc9v5.x9f619.x78zum5.xg7h5cd.xl56j7k.x1xfsgkm.xqmdsaz.x1bhewko.xgv127d.xh8yej3');
    mainElements.forEach((element) => {
        element.remove();
    });

    const shortContainer=document.getElementById('shorts-container');
if(shortContainer){
    shortContainer.remove();
}
});
observer.observe(document.body, { childList: true, subtree: true });