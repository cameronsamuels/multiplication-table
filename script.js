document.addEventListener("DOMContentLoaded", function() {
  
  document.querySelector("div").addEventListener("click", function() {
    var x = document.querySelector("input").value;
    if (x === "" || !x.match(/[1-9]/) || x < 3 || x > 32)
      return;
    
    var wrapper = document.createElement("main");
    var heading = document.createElement("h1");
    var table = document.createElement("table");
    var printButton = document.createElement("div");
    
    for (var i = 0; i < x; i++) {
      table.insertRow(table.rows.length);
      for (var j = 0; j < x; j++) {
        table.rows[i].insertCell(j);
        table.rows[i].cells[j].textContent = (i + 1) * (j + 1);
        table.rows[i].cells[j].style.width = 100 / x + "%";
      }
    }
    
    wrapper.setAttribute("class", "output");
    var y = 8 / x * 8;
    wrapper.style.fontSize = y + "vmin";
    
    heading.textContent = x + "x" + x + " Multiplication Table";
    
    printButton.textContent = "Print";
    printButton.addEventListener("click", function() {
      window.print();
    });
    
    document.querySelector("main").remove();
    document.body.appendChild(wrapper);
    wrapper.appendChild(heading);
    wrapper.appendChild(table);
    wrapper.appendChild(printButton);
  });
  
  document.querySelector("input").addEventListener("keyup", function(e) {
    if ((e.keyCode || e.which) == 13)
      document.querySelector("div").click();
  });
  
});
