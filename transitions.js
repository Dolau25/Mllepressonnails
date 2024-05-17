document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll("nav a");



    links.forEach(link => {

        link.addEventListener("click", function(event) {

            event.preventDefault();

            const target = event.target.getAttribute("href");



            document.body.classList.add("fade-leave");

            setTimeout(() => {

                window.location.href = target;

            }, 500);

        });

    });



    window.addEventListener("pageshow", function() {

        document.body.classList.remove("fade-leave");

        document.body.classList.add("fade-enter");

        setTimeout(() => {

            document.body.classList.remove("fade-enter");

        }, 500);

    });

});
