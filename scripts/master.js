var $ = document.querySelector;

var memory = 0;

//0 sum, 1 minus, 2 mult, 3 divide
var currOp = null;
var logPad = document.querySelector('#result');
var replaceLog = true;

document.querySelector('#clear-all').addEventListener('click', function(){
  memory = 0;
  currOp = null;
  clearLog();
});

document.querySelector('#clear').addEventListener('click', function(){
  clearLog();
});

document.querySelector('#delete').addEventListener('click', function(){
  delLog();
});

document.querySelectorAll('.number').forEach(function(elem){
  elem.addEventListener('click', function(e){
    writeLog(e.target.innerHTML);
  });
});

document.querySelector('#plus').addEventListener('click', function(){
  currOp = 0;
  replaceLog =  true;
  memory = logPad.innerHTML;
});

document.querySelector('#minus').addEventListener('click', function(){
  currOp = 1;
  replaceLog =  true;
  memory = logPad.innerHTML;
});

document.querySelector('#multiply').addEventListener('click', function(){
  currOp = 2;
  replaceLog =  true;
  memory = logPad.innerHTML;
});

document.querySelector('#divide').addEventListener('click', function(){
  currOp = 3;
  replaceLog =  true;
  memory = logPad.innerHTML;
});

document.querySelector('#equal').addEventListener('click', function(){
  logResult();
});

/// functions

function clearLog(){
  logPad.innerHTML = 0;
  if (replaceLog) currOp = null;
  replaceLog = true;
}

function delLog(){
  if(logPad.innerHTML.length <= 1){
    logPad.innerHTML = 0;
    replaceLog = true;
  } else {
    logPad.innerHTML = logPad.innerHTML.substring(0, logPad.innerHTML.length -1);
  }
}

function writeLog(n){
  if (replaceLog){
    if (n === '.') {
      logPad.innerHTML = '0.';
    } else {
      logPad.innerHTML = n;
    }
    replaceLog = false;
  } else {
    if (n === '.' && logPad.innerHTML.indexOf('.') !== -1){
      void(0);
    } else {
      logPad.innerHTML += n;
    }
  }
}

function logResult(){
  var lastLog = logPad.innerHTML;
  if (currOp === 0){
    logPad.innerHTML = parseFloat(logPad.innerHTML) + parseFloat(memory);
  } else if (currOp === 1){
    logPad.innerHTML = parseFloat(memory) - parseFloat(logPad.innerHTML);
  } else if (currOp === 2){
    logPad.innerHTML = parseFloat(memory) * parseFloat(logPad.innerHTML);
  } else if (currOp === 3){
    logPad.innerHTML = parseFloat(memory) / parseFloat(logPad.innerHTML);
  }
  
  if (!replaceLog) memory = lastLog;
  replaceLog =  true;
  
  console.log(memory, logPad.innerHTML, currOp, replaceLog);
} 