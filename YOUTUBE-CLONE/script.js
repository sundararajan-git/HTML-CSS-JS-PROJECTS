const videoList = document.getElementById("videos");
const li = document.getElementsByTagName("li");
const videos = videoList.childNodes;

for (let i = 0; i < 5; i++) {
    videos.forEach((item) => {
        let cln = item.cloneNode(true);
        videoList.appendChild(cln);
    });
}

for (let i = 0; i < 15; i++) {
    li[i].addEventListener("click", () => {
        if (li[i].style.backgroundColor !== "white") {
            li[i].style.backgroundColor = "White";
            li[i].style.color = "black";
            console.log(i);
        } else {
            li[i].style.backgroundColor = "";
            li[i].style.color = "";
        }
    });
}
