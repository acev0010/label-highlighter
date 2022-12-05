
const labels = document.getElementsByTagName("label");

for(label of labels) {
    label.style.border = "4px solid red";
 }
function high(){
    labels = document.getElementsByTagName('label');
    for( var i = 0; i < labels.length; i++ ) {
       if (labels[i].getAttribute("for")){
       labels[i].style.border = "4px solid red";}
       
    }}
    // javascript: (() => {
    //     labels = document.getElementsByTagName('label');
    // for( var i = 0; i < labels.length; i++ ) {
    //    if (labels[i].getAttribute("for")){
    //    labels[i].style.border = "4px solid red";}
       
    //   }})();

// document.getElementById("btn2").addEventListener("click", high);


