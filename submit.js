    function sub() {
        const name = document.getElementById("mongo").value;
        if (name == "atlas" || name == "Atlas" || name == "ATLAS") {    
        document.getElementById("sub").innerHTML = "Your next location is The Orb";
        }
        else {
            document.getElementById("sub").innerHTML =("Try again <3");
            document.getElementById("mongo").value="";
        }
     }
