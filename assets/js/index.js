function welcomeText(){
    const container = document.getElementById("container");
    const text = document.createElement("h1");
    text.innerHTML ="Welcome to my<br>very special page!";
    text.setAttribute("id","welcome_text");
    container.appendChild(text);
}


function imageParagraph(){
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.innerText = description();
    p.style.display ="flex";
    p.style.textAlign ="justify";
    p.style.marginTop = "50px" 
    container.appendChild(p);
    const img = document.createElement("img");
    img.setAttribute("id","imageParagraph");
    img.src = "assets/images/image.jpg";
    p.appendChild(img);
}

function getPersonalInfo(){
    var firstname;
    var bday;
    while(!firstname){
        firstname  = prompt("Enter your first name");
    }
    while(!bday){
        bday  = prompt("Enter your year of birth");
    }
    const age = 2020 - bday;
    const container = document.getElementById("container");
    const n = document.createElement("h1");
    n.innerHTML =`Your name is ${firstname}!<br>Age ${age}`;
    container.appendChild(n);

     //page reload button
    var a = createButtonLink(createButton("Calculate Age again!"),3);
    container.appendChild(a);
}


function readMe(){
    var preferredColor,invertedColor;
    var bgColor;
    const container = document.getElementById("container");
    const text = document.createElement("p");
    while(!preferredColor){
        preferredColor  = prompt("Dark mode or Light Mode?");
    } preferredColor = preferredColor.toLowerCase();
    if (preferredColor.includes("light")) {
        preferredColor = "#f4f4f4";
        invertedColor = "#3c3b3b";
    } else if (preferredColor.includes("dark")) {
        preferredColor = "#3c3b3b";
        invertedColor = "#f4f4f4";
    }
        else preferredColor = false;

    if(!preferredColor){
        preferredColor = "#3c3b3b";
        invertedColor = "#f4f4f4";
        alert("Unidentified color, defaulted to black");
    }
    text.innerHTML = generateLoremIpsum();
    text.style.color = invertedColor;
    text.style.textAlign = "center";
    bgColor = preferredColor;
    document.body.style.backgroundColor = bgColor;
    container.appendChild(text);

      //page reload button
      var btn = createButton("Change background color");
      btn.style.borderColor = invertedColor;
      btn.style.color = invertedColor;
      var a = createButtonLink(btn,4);
      container.appendChild(a);
}


function psychoanalysis(){
    
    //page reload button
    const container = document.getElementById("container");
    var a = createButtonLink(createButton("Talk Again"),5);

    container.appendChild(a);
    alert("Hello! \n\nI am Sigmund Freud. \n\nYour personal psychologist and neurologist.");
    alert("I am gonna ask you some questions about your day. \n\n Please answer it honestly");
    var answer = prompt("How are you feeling? Are you happy or sad?");
    answer =  answer.toLowerCase();
    if(answer.includes("i") && answer.includes("down") || answer.includes("sad")){
        answer = prompt("What made you feel that way?");
        alert("\nSorry to hear that. But remember, there will always be rainbow after a rain.");
        answer = prompt("So tell me, what are the things that you enjoy doing.");
        if(answer.includes("none") || answer.includes("nothing")){
            alert("\nYou will find happiness soon. Dont give up and live your life to its fullest.");
            return;
        }
        else{
            alert("\nIts nice to know there are things that make you feel happy.");
            answer = prompt("Do you still do them, like when you're feeling down?");
            if(answer.includes("yes")){
                alert("\nIts great to hear that, just keep living your life with positivity my friend.");
                prompt("\nIf you need someone to talk to, I am always here. Okay?");
            }else{
                prompt("It is okay to feel down sometimes, but you got to be strong okay?");
                prompt("Nice!, Just keep the positivity going. I will always be here to talk to you. Tell me if you need someone to talk to. Okay?")
            }
        }
    }
    else if(answer.includes("happy")|| answer.includes("joy")){
         alert("It is nice to know that you're happy\n\n\n-->continue");
         answer = prompt("What made your day?");
         answer = prompt("Great to hear that. Also, which one do you prefer rainy day or sunny day?")
         if(answer.includes("rainy")){
             alert("\nI also like rainy days. Especially the sound of rain drops together with Lo-fi music.");
             answer =  prompt("It is really great that you're feeling happy. If you need a friend to listen just speak again with me okay?");
         }else if(answer.includes("sunny")){
             alert("\nI also like sunny days. The way it brings light to the whole world is amazing.");
             answer =  prompt("I am really glad that you're happy. If you need a friend to listen just speak again with me okay?");
         }else{
             alert("\nSorry, something went wrong!");
         }
    }else{
        alert("\nSorry, I can't understand your answer");
    }

}


//helper functions

function generateLoremIpsum(){
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla nisi dignissim augue egestas, id tincidunt leo ultrices. Nulla iaculis risus pulvinar eleifend aliquet. Aenean ornare, quam a interdum vehicula, dui ex elementum mi, ac hendrerit nunc metus sit amet mauris. Fusce dignissim odio non erat gravida euismod. Duis felis orci, pellentesque et dignissim eu, cursus et neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse tempor bibendum orci at vestibulum. Donec elementum a justo sed placerat. Etiam id orci nec nulla venenatis eleifend sit amet non augue. Suspendisse eleifend neque sem. Ut commodo nulla quis posuere fringilla. Vivamus maximus arcu eros, id accumsan sapien malesuada non. Donec feugiat, lacus eget lobortis ornare, neque nisi finibus ex, sed gravida est sapien eget enim. Maecenas vulputate ex in lectus sodales, ac ultrices justo convallis."
}
function description(){
    return "Sigmund Freud, the father of psychoanalysis, was a physiologist, medical doctor, psychologist and influential thinker of the early twentieth century. Working initially in close collaboration with Joseph Breuer, Freud elaborated the theory that the mind is a complex energy-system, the structural investigation of which is the proper province of psychology. He articulated and refined the concepts of the unconscious, infantile sexuality and repression, and he proposed a tripartite account of the mind’s structure—all as part of a radically new conceptual and therapeutic frame of reference for the understanding of human psychological development and the treatment of abnormal mental conditions. Notwithstanding the multiple manifestations of psychoanalysis as it exists today, it can in almost all fundamental respects be traced directly back to Freud’s original work."
}


function createButton(text){
    var btn = document.createElement("button");
    btn.setAttribute("id","btn_id");
    btn.innerHTML = text;
    btn.style.cursor = "pointer";
    return btn;
}

function createButtonLink(btn,pageNo){
    var a = document.createElement("a");
    a.setAttribute("id","a_id");
    a.style.cursor = "pointer";
    a.setAttribute("href",`page${pageNo}.html`);
    a.appendChild(btn);
    return a;
}
