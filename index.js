function Tijd(){
    mytime = new Date();
    setTimeout(Tijd, 1000);
    console.log("date:" + mytime.toLocaleString());
    document.getElementById("Tijd").textContent = mytime.toLocaleString();
}

// Tijd();

// function ApiCall() {

//     fetch("https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=A16576626C2FADA28AFC66EA7DAB230D&steamid=76561197960435530&format=json")

//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log("ERROR:", error));
// }

// ApiCall();

// Source - https://stackoverflow.com/a/20812794
// Posted by Sridhar R
// Retrieved 2026-08-21, License - CC BY-SA 3.0