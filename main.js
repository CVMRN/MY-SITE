function section1_visble() {
    section1.style.display = "inline-block";
    section2.style.display = "none";
    section3.style.display = "none";
  }
  
  function section2_visble() {
    section1.style.display = "none";
    section2.style.display = "inline-block";
    section3.style.display = "none";
  }
  
  function section3_visble() {
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "inline-block";
  }
  
  var section1 = document.getElementById("section1");
  var section2 = document.getElementById("section2");
  var section3 = document.getElementById("section3");
  