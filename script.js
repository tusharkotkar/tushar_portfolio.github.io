/* ===================================== Typing Animation ============================================= */
var typed = new Typed(".typing",{
    strings:["","UnderGraduate","Problem Solver","Student at Keystone School Of Engineering"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ===================================== Aside Bar ============================================= */
const nav = document.querySelector(".nav"),
 navList = nav.querySelectorAll("li"),
 totalNavList = navList.length,
 allSection = document.querySelectorAll(".section"),
 totalSection = allSection.length;
// console.log(`${nav} and ${navList} and ${totalNavList}`);
for(let i=0;i<totalNavList;i++)
{
    
    const a = navList[i].querySelector("a");
    // console.log("inside first loop");
    // console.log(a);
    a.addEventListener("click", function(){
        for(let i=0;i<totalSection;i++)
        {
            allSection[i].classList.remove("back-section");
        }
        for(let j=0;j<totalNavList;j++)
        {
            // console.log("inside second loop");
            
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSelection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function showSelection(element) 
{
    for(let i=0;i<totalSection;i++)
    {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1]; // splitting the href link into ["","about"] ["","home"] ["","contact"] and
    // [1] means the string about home etc..
    document.querySelector("#"+target).classList.add("active");
}
function updateNav(element)
{
    for(let i=0;i<totalNavList;i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click",function ()
{
    showSelection(this);
    updateNav(this);
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0;i<totalSection ;i++)
        {
            allSection[i].classList.toggle("open");
        }
      }