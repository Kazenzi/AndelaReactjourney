const jsDiv=document.getElementById("datejs")
const reactDiv=document.getElementById("datereact")

const render=()=>{
    jsDiv.innerHTML=`
    <div class="split"> 
        Js template 
        <input/>
        <p>${new Date()}</p>
    </div>
    
    `;
}



var divToRender=React.createElement(
    "div",
    {className:"split"},
    "React Template",
    React.createElement("input"),
    React.createElement("p",null, new Date().toISOString())
);
ReactDOM.render(divToRender,reactDiv);


setInterval(render,1000)