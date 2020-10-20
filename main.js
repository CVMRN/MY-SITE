function Section1_visble() {
  Section1.style.display = "inline-block";
  Section2.style.display = "none";
  Section3.style.display = "none";
  }
  
  function Section2_visble() {
    Section1.style.display = "none";
    Section2.style.display = "inline-block";
    Section3.style.display = "none";
  }
  
  function Section3_visble() {
    Section1.style.display = "none";
    Section2.style.display = "none";
    Section3.style.display = "inline-block";
  }
  
  var Section1 = document.getElementById("Section1");
  var Section2 = document.getElementById("Section2");
  var Section3 = document.getElementById("Section3");