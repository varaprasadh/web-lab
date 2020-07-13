window.onload = () => {
    const sections=document.querySelectorAll(".screen");
    const windowHeight=window.innerHeight;
    const progressBar=document.querySelector(".bar");
    function onScroll(e){
        updatePageProgress();
       sections.forEach(section=>{
          if(section.classList.contains("intersecting")){
              let boundingRect=section.getBoundingClientRect();
              let visibleHeight = (boundingRect.top >= 0) ?
                                  (boundingRect.height - boundingRect.top) : 
                                  (boundingRect.height + boundingRect.top);
              let visiblePercent=visibleHeight/boundingRect.height*100;
              section.querySelector(".box").style.transform = `scale(${visiblePercent/100})`
          }
        })
    }
    function updatePageProgress() {
        let dy=window.scrollY+windowHeight;
        let scrollHeight=document.documentElement.scrollHeight
        progressBar.style.width = `${(dy/scrollHeight)*100}%`;
    }
    const observer=new IntersectionObserver((entries,observer)=>{
       entries.forEach(entry=>{
           if(!entry.isIntersecting){
               entry.target.classList.remove("intersecting");
               return;
            }
            entry.target.classList.add("intersecting");
       })
    },{threshold:0});
    sections.forEach(section=>{
        observer.observe(section);
    })
    document.addEventListener('scroll', debounce(onScroll, 16));
}
