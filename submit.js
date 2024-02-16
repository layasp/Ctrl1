var clickcount = 0;
    function sub() {
        const name = document.getElementById("mongo").value;
        if (name == "atlas" || name == "Atlas" || name == "ATLAS") {
            console.log("Your next location is The Orb");
            if (clickcount == "3") {
        document.getElementById("sub").innerHTML = "Check your Console!!";
    }
        }
        else {
            console.log("Try again <3");
            document.getElementById("mongo").value="";
        }
        clickcount = clickcount + 1;
    }