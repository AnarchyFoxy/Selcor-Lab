function WHCreateCookie(e, o, i) {
    var t = new Date;
    t.setTime(t.getTime() + 24 * i * 60 * 60 * 1e3);
    var n = "; expires=" + t.toGMTString();
    document.cookie = e + "=" + o + n + "; path=/"
}

function WHReadCookie(e) {
    for (var o = e + "=", i = document.cookie.split(";"), t = 0; t < i.length; t++) {
        for (var n = i[t];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(o)) return n.substring(o.length, n.length)
    }
    return null
}

function WHCheckCookies() {
    if ("T" != WHReadCookie("cookies_accepted")) {
        var e = document.createElement("div");
        e.id = "cookies-message-container";
        e.innerHTML = '<div id="cookies-message" style="padding: 20px 10px; position: fixed; bottom: 20px; left:15%; width: 70%; background: #f1f1f1; z-index: 99999;border-top: solid 5px #fff;border-bottom: solid 5px #fff;border-radius: 20px;"><div style="text-align:center;max-width:90%;margin:0 auto;"><div style="font-size: 16px; font-family: \'arial\', sans-serif; line-height: 20px; text-align: center; color: #000000;">Szanowny użytkowniku, niniejsza strona wykorzystuje pliki cookies. Informacje uzyskane za pomocą cookies wykorzystywane są w celach statystycznych. Pozostając na stronie godzisz się na ich zapisywanie w Twojej przeglądarce.<br><a href="javascript:WHCloseCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="padding: 15px 10px; color: #000000;border:#000000 1px solid;border-radius: 10px;display: inline-block; margin-top: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a></div></div></div>', document.body.appendChild(e)
    }
}

function WHCloseCookiesWindow() {
    WHCreateCookie("cookies_accepted", "T", 365), document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"))
}
window.onload = WHCheckCookies;
