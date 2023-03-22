function main() {
    document.getElementById('download').addEventListener('click', function (ev) {
        // alert('Download');
        Notification.requestPermission().then(function(result) {
            if(result === 'granted') {
                new Notification('Download');
            }
        });
    });
}

main();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}