const API = "https://jsonplaceholder.typicode.com/users";
const observerOptions = { threshold: 1 };

const state={
    loading:false,  //
    completed:false // when there is no more data left,
}
window.onload=()=>{
  const listContainer=document.querySelector(".list");
  const loader=document.querySelector(".loader");
  const InfiniteScrollObserver=new IntersectionObserver(([entry],observer)=>{
    if(entry.isIntersecting){
       loadMore();
    }
  }, observerOptions);
  InfiniteScrollObserver.observe(loader);




 function loadMore(){ 
      if(state.loading || state.completed){
          return;
      }
      state.loading=true;
      fetch(API).then(res=>res.json()).then(users=>{
        users.forEach(user=>{
            let card=document.createElement('div');
            card.className="list-item";
            listContainer.appendChild(card);
        })
      }).catch(err=>{
          console.error(err);
      })
   }
}


