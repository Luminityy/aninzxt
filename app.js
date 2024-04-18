let left_btn = document.getElementsByClassName('bi-caret-left-fill')[0];
let right_btn = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left_btn.addEventListener('click', ()=> {
    cards.scrollLeft -= 240; 
 })
 right_btn.addEventListener('click', ()=> {
    cards.scrollLeft += 240; 
 })

 let json_url = "anime.json"

 fetch(json_url).then(Response => Response.json())
   .then((data) => {
      data.forEach((ele, i) => {
         let {name, mal, running, sposter, bposter, genre, url} = ele;
         let card = document.createElement('a');
         card.classList.add('card');   
         card.href = url;  
         card.innerHTML = `
         <img src="${sposter}" alt="${name}" class="poster">
         <div class="rest_card">
             <img src="${bposter}" alt="${name}" >
             <div class="cont">
                 <h4>${name}</h4>
                 <div class="sub">
                     <p>${genre}, ${running}</p>
                     <h3><span>MAL</span><i class="bi bi-star-fill">${mal}</i></h3>
                 </div>
             </div>
         </div>
         `
         cards.appendChild(card);
    });
 });
