document.getElementById('pop_button').addEventListener('click', () => {
    if (document.getElementById('phone_outer').style.bottom == "-440px") {
        document.getElementById('phone_outer').style.bottom = "0px";
        document.getElementById('phone_outer').style.background = "#fff";
        document.getElementById('pop_button').style.transform = "rotate(180deg)";
    } else {
        document.getElementById('phone_outer').style.bottom = "-440px";
        document.getElementById('phone_outer').style.background = "#80d5f9";
        document.getElementById('pop_button').style.transform = "rotate(0deg)";
    }
});

