// get the data 
let users=[
    {profilePic:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
     pendingMessage:4,
      location:"Delhi, India",
       name:"Rashi",
       age:23,
        interests:[{
            icon:`<i class="ri-music-fill"></i>`,
            interest:"music"
        },{
            icon:`<i class="ri-quill-pen-fill"></i>`,
            interest:"writing"
        }],
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui consequatur ullam ipsa! Laudantium, quos.",
     isFriend:null
    },
    {profilePic:"https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage:3,
     location:"Mumbai, India",
      name:"Rashmika",
      age:26,
      interests:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music"
    },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }],
       bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui consequatur ullam ipsa! Laudantium, quos.",
    isFriend:null
   },
   {profilePic:"https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBvcnRyYWl0fGVufDB8fDB8fHww",
   displayPic:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
   pendingMessage:4,
    location:"Delhi, India",
     name:"John",
     age:36,
     interests:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music"
    },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }],
      bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui consequatur ullam ipsa! Laudantium, quos.",
   isFriend:null
  },
  {profilePic:"https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  displayPic:"https://images.unsplash.com/photo-1568038479111-87bf80659645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
  pendingMessage:14,
   location:"Delhi, India",
    name:"Karishma",
    age:22,
    interests:[{
        icon:`<i class="ri-music-fill"></i>`,
        interest:"music"
    },{
        icon:`<i class="ri-quill-pen-fill"></i>`,
        interest:"writing"
    }],
     bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui consequatur ullam ipsa! Laudantium, quos.",
  isFriend:null
 },
];

function select(elem){
    return document.querySelector(elem)
}

let curr =0;
let isAnimating= false;

function setData(index){
    select(".prflimg img").src= users[index].profilePic;
    select(".badge h5").textContent= users[index].pendingMessage;
    select(".location h3").textContent= users[index].location;
    select(".name h1:nth-child(1)").textContent= users[index].name;
    select(".name h1:nth-child(2)").textContent= users[index].age;

    let clutter="";
    users[index].interests.forEach(function(interest){
     clutter+=`   <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
     ${interest.icon} <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
 </div>
`
    })
    select(".tags").innerHTML= clutter;
    select(".bio p").textContent= users[index].bio;
}

(function setInitial(){
    select(".maincard img").src= users[curr].displayPic;
    select(".incomingcard img").src= users[curr+1]?.displayPic;

    setData(curr);

   
    curr =2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating= true;
        let tl= gsap.timeline({
            onComplete: function(){
                isAnimating= false;
               let main= select(".maincard");
               let incoming= select(".incomingcard")
    
               incoming.classList.remove("z-[2]");
               incoming.classList.add("z-[3]");
               incoming.classList.remove("incomingcard");
    
               main.classList.remove("z-[3]");
               main.classList.add("z-[2]");
               gsap.set(main,{
                scale:1,
                opacity:1
               })
               if(curr=== users.length) curr=0;
               select(".maincard img").src= users[curr].displayPic;
               curr++
    
               main.classList.remove("maincard");
               incoming.classList.add("maincard");
               main.classList.add("incomingcard");
               
            }
        });
       tl.to(".maincard",{
        scale:1.1,
        opacity:0,
        ease: Circ,
        duration: .9
       },"a")
       .from(".incomingcard",{
        scale:.9,
        opacity:0,
        ease: Circ,
        duration: 1.1
       },"a")
    }
    }

    
    
let deny= select(".deny")
let accept= select(".accept")

deny.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity:0,
        stagger: .06,
        ease:Power4.easeInOut,
        duration:.7
    })
})
accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity:0,
        stagger: .06,
        ease:Power4.easeInOut,
        duration:.7
    })
})

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function (element){
        let div= document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

