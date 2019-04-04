$(() => {



let cl = (m) => {
    console.log(m);
}

let nav = {
    home: $(".nav-home"),
    projects: $(".nav-projects"),
    about: $(".nav-about"),
    contact: $(".nav-contact"),
}
let pages = {
    home: $(".home"),
    projects: $(".projects"),
    about: $(".about"),
    contact: $(".contact"),
}

let trans = {
    h: () => {
        nav.home.on("click", () => {
            cl("home");
            pages.home.slideDown().css("display", "grid");
            pages.projects.slideUp();
            pages.about.slideUp();
            pages.contact.slideUp();
        });
    },
    p: () => {
        nav.projects.on("click", () => {
            cl("projects");
            pages.home.slideUp();
            pages.projects.slideDown().css("display", "grid");
            pages.about.slideUp();
            pages.contact.slideUp();
        });
    },
    a: () => {
        nav.about.on("click", () => {
            cl("about");
            pages.home.slideUp();
            pages.projects.slideUp();
            pages.about.slideDown().css("display", "grid");
            pages.contact.slideUp();
        });
    },
    c: () => {
        nav.contact.on("click", () => {
            cl("contact");
            pages.home.slideUp();
            pages.projects.slideUp();
            pages.about.slideUp();
            pages.contact.slideDown().css("display", "grid");
        });
    },
}

trans.h();
trans.p();
trans.a();
trans.c();




});