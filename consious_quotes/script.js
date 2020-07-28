window.onload=()=>{
    const grid_container=document.querySelector(".container");
    const gridBtn = document.querySelector(".grid-button");
    const listBtn = document.querySelector(".list-button");
    const tiles = document.querySelectorAll(".tile");
    const modal = document.querySelector(".modal");

    gridBtn.classList.add("active");
    gridBtn.addEventListener('click',e=>{
        gridBtn.classList.add("active");
        listBtn.classList.remove("active");
        grid_container.style.display="grid";
    });
    listBtn.addEventListener('click', e => {
        listBtn.classList.add("active");
        gridBtn.classList.remove("active");
        grid_container.style.display = "block";
    });
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry=>{
          if(!entry.isIntersecting){
            return;
          }
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);

      })
    });
    tiles.forEach(tile=>{
        imageObserver.observe(tile)
        tile.addEventListener('click',e=>{
            let src = tile.querySelector('img').src;
            modal.style.display="flex";
            modal.querySelector("img").src=src;
        });
    });

    modal.addEventListener('click',e=>{
        if(e.target!=modal) return;
     modal.style.display="none";   
    });

}
