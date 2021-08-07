var i = 0;
function move() {
    console.log("hello ")
  if (i == 0) {
    i = 1;
    var elem1 = document.getElementById("myBar1");
    var width1 = 1;
    var id1 = setInterval(frame1, 10);
    function frame1() {
        console.log(width1);
      if (width1 >= 90) {
        clearInterval(id1);
        i = 0;
      } else {
        width1++;
        elem1.style.width = width1 + "%";
      }
    }
    var elem2 = document.getElementById("myBar2");
    var width2 = 1;
    var id2 = setInterval(frame2, 10);
    function frame2() {
      if (width2 >= 90) {
        
        clearInterval(id2);
        i = 0;
      } else {
        width2++;
        elem2.style.width = width2 + "%";
      }
    }

    var elem3 = document.getElementById("myBar3");
    var width3 = 1;
    var id3 = setInterval(frame3, 10);
    function frame3() {
      if (width3 >= 80) {
        
        clearInterval(id3);
        i = 0;
      } else {
        width3++;
        elem3.style.width = width3 + "%";
      }
    }
    var elem4 = document.getElementById("myBar4");
    var width4 = 1;
    var id4 = setInterval(frame4, 10);
    function frame4() {
      if (width4 >= 60) {
        clearInterval(id4);
        i = 0;
      } else {
        width4++;
        elem4.style.width = width4 + "%";
      }
    }
    var elem5 = document.getElementById("myBar5");
    var width5 = 1;
    var id5 = setInterval(frame5, 10);
    function frame5() {
      if (width5 >= 50) {
        clearInterval(id5);
        i = 0;
      } else {
        width5++;
        elem5.style.width = width5 + "%";
      }
    }
  }
}
// window.onload = move;