$(() => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDzMm7clsh9FftZN_K696lX2rCZOmfBHbw",
    authDomain: "port-contact.firebaseapp.com",
    databaseURL: "https://port-contact.firebaseio.com",
    projectId: "port-contact",
    storageBucket: "port-contact.appspot.com",
    messagingSenderId: "891521936875"
  };
  firebase.initializeApp(config);
  let db = firebase.database();
  let dbr = db.ref();


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
        nav.home.on("click", function() {
            cl("home");
            pages.home.slideDown(1200).css({"display": "grid"}, 1000);
            pages.projects.slideUp(1000);
            pages.about.slideUp(1000);
            $(this).blur();
        });
    },
    p: () => {
        nav.projects.on("click", function() {
            cl("projects");
            pages.projects.slideDown(1200).css({"display": "grid"}, 1000);
            pages.home.slideUp(1000);
            pages.about.slideUp(1000);
            $(this).blur();
        });
    },
    a: () => {
        nav.about.on("click", function() {
            cl("about");
            pages.about.slideDown(1200).css({"display": "grid"}, 1000);
            pages.home.slideUp(1000);
            pages.projects.slideUp(1000);
            $(this).blur();
        });
    },
    c: () => {
        nav.contact.on("click", function() {
            cl("contact");
            trans.ctoggle();
            $(this).blur();
        });
    },
    ctoggle: () => {
        if(pages.contact.attr("value") === "hide"){
            cl("Contact Val is hide");
            pages.contact.attr("value", "show");
            pages.contact.animate({"margin-right": '+=450'}, 1500);
        }
        else if(pages.contact.attr("value") === "show"){
            cl("Contact Val is show");
            pages.contact.attr("value", "hide");
            pages.contact.animate({"margin-right": '-=450'}, 1500);
        }
        else{
            cl("shit aint working");
        }
    },
}

let contact = () => {
    $("#submit").on("click", () => {
        let name = $("#contact-name").val().trim();
        let email = $("#contact-email").val().trim();
        let message = $("#contact-message").val().trim();
        cl(name + "\n" + email + "\n" + message + "\n");
        if(name === "" || email === "" || message === ""){
            cl("No Input");
        }
        else{
            db.ref(name).set({
                name,
                email,
                message,
            });
            $("#contact-name").val("");
            $("#contact-email").val("");
            $("#contact-message").val("");
            trans.ctoggle();
        }

    });
}









trans.h();
trans.p();
trans.a();
trans.c();

//projectsPage.h();

contact();

});