(function () {
    var now = new Date();
    var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
        "0" + now.getHours();
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://van.najva.com/static/cdn/css/local-messaging.css" + "?v=" + version;
    head.appendChild(link);
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://van.najva.com/static/js/scripts/new-website122764-website-61735-094a0fea-4408-4eb2-94d5-8bf1b105ec7d.js" + "?v=" + version;
    head.appendChild(script);
})()