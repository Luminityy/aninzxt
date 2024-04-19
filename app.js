let left_btn = document.getElementsByClassName('bi-caret-left-fill')[0];
let right_btn = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];

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

    document.getElementById('title').innerText = data[0].name;
    document.getElementById('desc').innerText = data[0].desc;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('date').innerText = data[0].running;
    document.getElementById('rate').innerHTML = `<span>MAL</span><i class="bi bi-star-fill"></i> ${data[0].mal}`;
    
    data.forEach(element => {
        let {name, mal, running, sposter, genre, url} = element;
        let card = document.createElement('a');
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
            <img src="${sposter}" alt="poster">
            <div class="cont">
                <h3>${name}</h3>
                <p>${genre}, ${running},<span>MAL</span><i class="bi bi-star-fill">${mal}</i></p>
            </div>
        `
        search.appendChild(card)
    });
    
    search_input.addEventListener('keyup', () => {
        let filter = search_input.value.toLowerCase();
        let a = search.getElementsByTagName('a');
      
        if (filter === '') {
          search.style.visibility = "hidden";
          search.style.opacity = 0;
          for (let index = 0; index < a.length; index++) {
            a[index].style.display = "none";
          }
        } else {
          search.style.visibility = "visible";
          search.style.opacity = 1;
          for (let index = 0; index < a.length; index++){
            let b = a[index].getElementsByClassName('cont')[0];
            let TextValue = b.textContent || b.innerText;
            if (TextValue.toLowerCase().indexOf(filter) > -1) {
              a[index].style.display = "flex";
            } else {
              a[index].style.display = "none";
            }
          }
        }
      });

      let video = document.getElementsByTagName('video')[0];
      let play = document.getElementById('play');
    /*play.addEventListener('click', () => {
       if(video.paused) {
         video.play();
         play.innerHTML = `PLAY <i class="bi bi-pause-fill"></i>`
      } else {
         video.pause();
         play.innerHTML = `WATCH <i class="bi bi-play-fill"></i>`
      }
    });*/

    let hot = document.getElementById('hot');

    hot.addEventListener('click', () => {
      cards.innerHTML = '';
    
      let hot_array = data.filter(ele => {
        return ele.status === "hot"
      });
    
      hot_array.forEach((ele, i) => {
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
      
         
       });
