// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png'];

var landing_page = "https://clientefavoritofordsp.com/?utm_source=NBIDS&utm_medium=Interative&utm_campaign=setor%2013_julho"


var output = document.getElementById('output');
openfile(imges[0]);
pg1func(output);

// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});


// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};


// click count but it refreshes again as per page loads
function APICall(n){
  // console.log(n,"no")
  var x =JSON.stringify({ key:n})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=25', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

};

window.onload = function(){
  var x =JSON.stringify({ key:"impression"})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=25', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data,"ddddddddddddddddddddddd");
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}

function pg1func(op){
    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 288px;left: 160px;height: 120px;background: transparent;width: 217px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
        APICall("page1"); 
        op.src = imges[1];
        pg2func(op);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 288px;left: 410px;height: 120px;background: transparent;width: 217px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
        APICall("page2leftkey1"); 
        op.src = imges[2];
        pg3func(op);
    };

    var home = document.getElementById("home");
    home.style = "position: absolute;top: 668px;left: 173px;height: 132px;background: transparent;width: 436px;border-radius: 2%;border: 1px solid transparent;";
    home.onclick= function(){
        APICall("page2leftkey2"); 
        window.open(landing_page);
    };
};

function pg2func(op){

    document.getElementById("btn1").style = "display:none !important; border:none;";

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 293px;left: 449px;height: 75px;background: transparent;width: 136px;border-radius: 2%;border: 1px solid transparent;";
    btn2.onclick= function(){
        APICall("page2leftkey3"); 
        op.src = imges[2];
        pg3func(op);
    };

    var home = document.getElementById("home");
    home.style = "position: absolute;top: 759px;left: 174px;height: 62px;background: transparent;width: 428px;border-radius: 2%;border: 1px solid transparent;";
    home.onclick= function(){
        APICall("page2rightkey1"); 
        window.open(landing_page);
    };
};

function pg3func(op){

    document.getElementById("btn2").style = "display:none !important; border:none;";

    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 290px;left: 210px;height: 75px;background: transparent;width: 136px;border-radius: 2%;border: 1px solid transparent;";
    btn1.onclick= function(){
        APICall("page2rightkey2"); 
        op.src = imges[1];
        pg2func(op);
    };

    var home = document.getElementById("home");
    home.style = "position: absolute;top: 759px;left: 174px;height: 62px;background: transparent;width: 428px;border-radius: 2%;border: 1px solid transparent;";
    home.onclick= function(){
        APICall("page2rightkey3"); 
        window.open(landing_page);
    };
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');
    op.onmousedown = GetCoordinates;

    if (op.src.search('1.png') > -1)
    {
        pg1func(op);
    }
};


function FindPosition(oElement){
  if(typeof( oElement.offsetParent ) != "undefined")
  {
    for(var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent)
    {
      posX += oElement.offsetLeft;
      posY += oElement.offsetTop;
    }
      return [ posX, posY ];
    }
    else
    {
      return [ oElement.x, oElement.y ];
    }
};

//Getting a Co-ordinates of Mouse click
function GetCoordinates(e){

  var PosX = 0;
  var PosY = 0;
  var ImgPos;
  ImgPos = FindPosition(output);

  if (!e) var e = window.event;
  if (e.pageX || e.pageY)
  {
    PosX = e.pageX;
    PosY = e.pageY;
  }
  else if (e.clientX || e.clientY)
    {
      PosX = e.clientX + document.body.scrollLeft
        + document.documentElement.scrollLeft;
      PosY = e.clientY + document.body.scrollTop
        + document.documentElement.scrollTop;
    }
  PosX = PosX - ImgPos[0];
  PosY = PosY - ImgPos[1];
  //document.getElementById("x").innerHTML = PosX;
  //document.getElementById("y").innerHTML = PosY;
  return (PosX, PosY);
};