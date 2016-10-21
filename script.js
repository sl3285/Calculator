var clear = false;

function one_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "1";
  } else{
    clear_event();
  }
}

function two_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "2";
  } else{
    clear_event();
  }
}

function three_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "3";
  } else{
    clear_event();
  }
}

function four_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "4";
  } else{
    clear_event();
  }
}

function five_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "5";
  } else{
    clear_event();
  }
}

function six_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "6";
  } else{
    clear_event();
  }
}

function seven_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "7";
  } else{
    clear_event();
  }
}

function eight_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "8";
  } else{
    clear_event();
  }
}

function nine_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "9";
  } else{
    clear_event();
  }
}

function zero_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + "0";
  } else{
    clear_event();
  }
}

function decimal_event(){
  if (clear == false){
  document.getElementById("textbox").value =
    document.getElementById("textbox").value + ".";
  } else{
    clear_event();
  }
}

function add_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "+";
  } else{
    clear_event();
  }
}

function sub_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "-";
  } else{
    clear_event();
  }
}

function mul_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "*";
  } else{
    clear_event();
  }
}

function div_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "/";
  } else{
    clear_event();
  }
}

function mod_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "%";
  } else{
    clear_event();
  }
}

function left_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + "(";
  } else{
    clear_event();
  }
}

function right_event(){
  if (clear == false){
  document.getElementById("textbox").value = 
    document.getElementById("textbox").value + ")";
  } else{
    clear_event();
  }
}

function equal_event(){
  var result = eval(document.getElementById("textbox").value);
  document.getElementById("textbox").value = result;
  clear = true;
}

function clear_event(){
  document.getElementById("textbox").value ="";
  clear = false;
}






