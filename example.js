function batteryStatus(statusCallback) {
    try {
      navigator.getBattery()
        .then( statusCallback.bind(null, false), statusCallback );
    } catch (e) {
      statusCallback(e);
    }
}

function statusCallback(err, batteryStatus) {
  if(err) {
    console.error('Unfortunately, we cannot get yout battery status.', err);
    return;
  }

  var level = batteryStatus.level * 100;
  console.log('Your current battery status is: ', level);

  if(level < 6) {
    alert('Oh no! You should charge your device!');
  }
}

setInterval(function() {
  batteryStatus(statusCallback);
}, 6E5);
