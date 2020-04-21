window.onscroll = () => {

    console.log(window.scrollY);


    //scroll Y .... y con mayuscula
    let scroll = window.scrollY;

    //selecciona el div .... header-scroll
    const headerScroll = document.querySelector(".header-scroll.pt-4");

    if (scroll > 300) {


        headerScroll.classList.add("activo");
        console.log("si !")
        console.log(headerScroll);

    } else {
        headerScroll.classList.remove("activo");

        console.log("Ya casi..!!!");
        console.log(headerScroll);
    }
    //console.log(scroll);


}