    const links = document.querySelectorAll(".alternate-style"),
          totalLinks = links.length;


    function SetActiveStyle(color) {

        localStorage.setItem("color", color);
        ChangeColour();
    }


    function ChangeColour(){
        for (let i = 0; i < totalLinks; i++) {
            if(localStorage.getItem("color") === links[i].getAttribute("title")){
                links[i].removeAttribute("disabled");
            }
            
            else{
                links[i].setAttribute("disabled", "true");
            }
        }
    }

    if(localStorage.getItem("color") !== null){
       ChangeColour();
    }
// body skin
    const bodySkin = document.querySelectorAll(".body-skin"),
          totalBodySkin = bodySkin.length;

    for (let i = 0; i < totalBodySkin; i++) {
        bodySkin[i].addEventListener("change", function(){
            if(this.value === "dark"){
                document.body.classList.add("dark");
            }

            else{
                document.body.classList.remove("dark");

            }

            if(document.body.classList.contains("dark")){
                localStorage.setItem("theme", "dark");
            }

            else{
                localStorage.setItem("theme", "light");
            }
        });        
    }

    function themeMode(){
        if(localStorage.getItem("theme") !== null){
            if(localStorage.getItem("theme") === "light"){
                document.body.classList.remove("dark");
            }

            else{
                document.body.classList.add("remove");
            }
        }
    }
    themeMode();
    // changing it with the timing

    var time = new Date();
    var hr = time.getHours();

    if(hr > 16){
        document.body.className = "dark";
    }

    if(hr < 16){
        document.body.className = "";
    }

// hamburger
document.querySelector(".toggle-style-switcher").addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});   