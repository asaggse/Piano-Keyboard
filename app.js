function play(str) {
    if (str === "1C") {
      document.getElementById("display").innerText = "C";
    } else if (str === "1Db") {
      document.getElementById("display").innerText = "C#";
    } else if (str === "1D") {
      document.getElementById("display").innerText = "D";
    } else if (str === "1Eb") {
      document.getElementById("display").innerText = "D#";
    } else if (str === "1E") {
      document.getElementById("display").innerText = "E";
    } else if (str === "1F") {
      document.getElementById("display").innerText = "F";
    } else if (str === "1Gb") {
      document.getElementById("display").innerText = "F#";
    } else if (str === "1G") {
      document.getElementById("display").innerText = "G";
    } else if (str === "1Ab") {
      document.getElementById("display").innerText = "G#";
    } else if (str === "1A") {
      document.getElementById("display").innerText = "A";
    } else if (str === "1Bb") {
      document.getElementById("display").innerText = "A#";
    } else if (str === "1B") {
      document.getElementById("display").innerText = "B";
    } else if (str === "2C") {
      document.getElementById("display").innerText = "C";
    } else if (str === "2Db") {
      document.getElementById("display").innerText = "C#";
    } else if (str === "2D") {
      document.getElementById("display").innerText = "D";
    } else if (str === "2Eb") {
      document.getElementById("display").innerText = "D#";
    } else if (str === "2E") {
      document.getElementById("display").innerText = "E";
    }
    var audio = document.getElementById(str);
    audio.play();
  }
  window.document.onkeyup = function(event) {
    let key = event.key;
    if (key === "a" || key === "A") {
      play("1C");
      document.getElementById("display").innerText = "C";
    } else if (key === "w" || key === "W") {
      play("1Db");
      document.getElementById("display").innerText = "C#";
    } else if (key === "s" || key === "S") {
      play("1D");
      document.getElementById("display").innerText = "D";
    } else if (key === "e" || key === "E") {
      play("1Eb");
      document.getElementById("display").innerText = "D#";
    } else if (key === "d" || key === "D") {
      play("1E");
      document.getElementById("display").innerText = "E";
    } else if (key === "f" || key === "F") {
      play("1F");
      document.getElementById("display").innerText = "F";
    } else if (key === "t" || key === "T") {
      play("1Gb");
      document.getElementById("display").innerText = "F#";
    } else if (key === "g" || key === "G") {
      play("1G");
      document.getElementById("display").innerText = "G";
    } else if (key === "y" || key === "Y") {
      play("1Ab");
      document.getElementById("display").innerText = "G#";
    } else if (key === "h" || key === "H") {
      play("1A");
      document.getElementById("display").innerText = "A";
    } else if (key === "u" || key === "U") {
      play("1Bb");
      document.getElementById("display").innerText = "A#";
    } else if (key === "j" || key === "J") {
      play("1B");
      document.getElementById("display").innerText = "B";
    } else if (key === "k" || key === "K") {
      play("2C");
      document.getElementById("display").innerText = "C";
    } else if (key === "o" || key === "O") {
      play("2Db");
      document.getElementById("display").innerText = "C#";
    } else if (key === "l" || key === "L") {
      play("2D");
      document.getElementById("display").innerText = "D";
    } else if (key === "p" || key === "P") {
      play("2Eb");
      document.getElementById("display").innerText = "D#";
    } else if (key === "-" || key === "_") {
      play("2E");
      document.getElementById("display").innerText = "E";
    }
  };
  