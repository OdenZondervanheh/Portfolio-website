function Tijd(){
    mytime = new Date();
    setTimeout(Tijd, 1000);
    // console.log("date:" + mytime.toLocaleString());
    document.getElementById("Tijd").textContent = mytime.toLocaleString();
}

Tijd();


function Click(){
    // const div = document.getElementsByClassName('websiteviewer')[0].style.display

    const div = document.getElementById('testing');

    if(div.style.display === 'none'){
        div.style.display = 'block';
    } else {
        div.style.display = "none";
    }
}

