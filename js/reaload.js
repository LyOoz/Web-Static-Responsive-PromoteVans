function updateRealtimeData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "realtime-data.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("realtime-data").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

setInterval(updateRealtimeData, 10000);
