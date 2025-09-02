
document.addEventListener("DOMContentLoaded", navBarLoad)


function navBarLoad() {
    fetch("components/navBar.html")
        .then((res) => res.text())
        .then((data) => {

            const navBar = document.getElementById("navBar")
            const mobileNavBar = document.getElementById("mobileNavBar")
            navBar.innerHTML = data;
            mobileNavBar.innerHTML = data;

            const currentPath = window.location.pathname

            navBar.querySelectorAll("a").forEach((link) => {
                if (link.pathname === currentPath) {
                    link.classList.add("activeNavLink")
                } else {
                    link.classList.remove("activeNavLink")
                }
            })


            navBar.querySelectorAll("a").forEach((link) => {
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    document.body.classList.add("slide-out");

                    navBar.querySelectorAll("a").forEach((a) => a.classList.remove("activeNavLink"));
                    link.classList.add("activeNavLink");

                    setTimeout(() => {
                        window.location.href = link.href;
                    }, 500); // match animation duration
                });
            });
        });
}


