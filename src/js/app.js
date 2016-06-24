console.log('my-note app.js');

var newNote = $('.btn-newnote');
var saveNote = $('.btn-savenote');
var about = $('.btn-about');
var screen = $('.btn-screen');


var memo = $('#memo');
var flag = "false";

newNote.on('click',function(event){
    memo.val("");
});

saveNote.on('click',function(event){
    var value = memo.val();
    localStorage.setItem(value,"");
    memo.val("");
});

about.on('click',function(event){
    if(flag === "false"){
    console.log("show");
    $('#view').css("display","block");     
    flag = "true";
    }else if(flag === "true"){
    console.log("no show");
    $('#view').css("display","none");     
    flag = "false";
    }
});

screen.on('click',function(event){
    requestFullScreen();
});

function requestFullScreen() {
    ument.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

function load(){
//    var loding = localStorage.Key[0];
    var sosimple = document.getElementById("memo");
    for(var i = 0; i< localStorage.length ; i++){
        sosimple.innerHTML += localStorage.key(i) + "\n";   
    }
    
}

load();