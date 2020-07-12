window.onload=()=>{
  const options={
       threshold: 0
  }
  const scrollItemInObeserver=new IntersectionObserver((entries,observer)=>{
     entries.forEach(entry=>{
         if(!entry.isIntersecting){
             entry.target.classList.remove("scale");
             return;
         }else{
            entry.target.classList.add("scale");
         }
     })
  },options);

  const listItems=document.querySelectorAll(".list-item");
  listItems.forEach(el=>scrollItemInObeserver.observe(el));
}
