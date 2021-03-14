// Preloader

window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("gone");
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
});

//Portfolio Item filter

const FilterContainer = document.querySelector(".portfolio-filter"),
      FilterButtons = FilterContainer.children,
      TotalFilterBtns = FilterButtons.length,
      PortfolioItems = document.querySelectorAll(".portfolio-item"),
      TotalPortfolioItem = PortfolioItems.length;

      for (let i = 0; i < TotalFilterBtns; i++){
          FilterButtons[i].addEventListener("click", function(){
              FilterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const FilterValue = this.getAttribute("data-filter");
              for (let k = 0; k < TotalPortfolioItem; k++) {
                  if(FilterValue === PortfolioItems[k].getAttribute("data-category")){
                        PortfolioItems[k].classList.add("show");
                        PortfolioItems[k].classList.remove("hide");
                }
                
                   else{
                        PortfolioItems[k].classList.remove("show");
                        PortfolioItems[k].classList.add("hide");
                }

                if(FilterValue === "all"){
                    PortfolioItems[k].classList.add("show");
                    PortfolioItems[k].classList.remove("hide");
                }
              }
          })
      }

// Portfolio lightbox

const lightbox = document.querySelector(".lightbox"),
      lighboxImage = lightbox.querySelector(".lightbox-img"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxh4 = lightbox.querySelector(".caption-text h4"),
      lightBoxCounter = lightbox.querySelector(".caption-counter");

      let ItemIndex = 0;

      
      for (let i = 0; i < TotalPortfolioItem; i++) {
          PortfolioItems[i].addEventListener("click", function(){
              ItemIndex = i;
              ChangeItem();
              ToggleLightBox();
            })
      }

      
      function ChangeItem(){
          imgSrc = PortfolioItems[ItemIndex].querySelector(".portfolio-img img").getAttribute("src");
          lighboxImage.src = imgSrc;
          lightboxText.innerHTML = PortfolioItems[ItemIndex].querySelector("h4").innerHTML;
          lightBoxCounter.innerHTML = (ItemIndex + 1) + " of " + TotalPortfolioItem;
     }      
        
    function ToggleLightBox(){
        lightbox.classList.toggle("open");
    }
    
    function nextItem(){
        if(ItemIndex == TotalPortfolioItem - 1){
            ItemIndex = 0;
        }

        else{
            ItemIndex++;
        }
        ChangeItem();
    }

    function prevItem(){
        if(ItemIndex == 0){
           ItemIndex = TotalPortfolioItem - 1;
        }

        else{
            ItemIndex--;
        }
        ChangeItem();
    }

    // Closing Lighbox

    lightbox.addEventListener("click", function(event){
        if(event.target === lightbox){
            ToggleLightBox();
        }
    })

    function closeBtn(){
        ToggleLightBox();
    }

    // Side menue navigation
    const nav = document.querySelector(".nav"),
          navList = nav.querySelectorAll("li"),
          totalNavList = navList.length,
          allSection = document.querySelectorAll(".section"),
          totalSection = allSection.length;

    for (let i = 0; i < totalNavList; i++) {

        const a = navList[i].querySelector("a");

        a.addEventListener("click", function(){
            for (let i = 0; i < totalSection ; i++) {
                allSection[i].classList.remove("back-section");
            }

            for (let j = 0; j < totalNavList; j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");       
            ShowSection(this);

            if(window.innerWidth < 1200){
                asideSectionToggleButton();
            }
        });
    }

    function ShowSection(element){
        for (let i = 0; i < totalSection ; i++) {
            allSection[i].classList.remove("active");
        }

        const target = element.getAttribute("href").split("#")[1];

        document.querySelector("#" + target).classList.add("active");
    }


    const navTogglerBtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

    navTogglerBtn.addEventListener("click", () => {
        asideSectionToggleButton();
    });

    function asideSectionToggleButton(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i < totalSection ; i++) {
            allSection[i].classList.toggle("open");
        }
    }

    // Typing text

    var homeTyping = new Typed(".home-typing", {
        strings: ["Web Developer", "Game Developer", "Git Pusher", "Coder", "Nothing", "master-typer"],
        typeSpeed: 30,
        backSpeed: 20,
        loop: true
    });

    var aboutTyping = new Typed(".about-typing", {
        strings: ["Web Developer", "Game Developer", "Git Pusher", "Coder", "Nothing", "master-typer"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
