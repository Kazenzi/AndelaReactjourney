// loadevent
window.onload=()=>{
    const rootElement=document.getElementById("root")
    // rootElement.innerHTML="Hello from my fisrt SPA App"

    // const button=document.createElement("button");
    // button.innerHTML="click for current date";
    // button.addEventListener("click",()=>{
    //     button.innerHTML=new Date().toString();
    // });
    // rootElement.appendChild(button)

    // using DOM
    const ints =[1,2,3];
    ints.forEach(i=>{
        let li=document.createElement("li");
        li.innerHTML=i;
        rootElement.appendChild(li);
    });
};