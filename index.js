function batteryStatus() {
    try {
      navigator.getBattery()
        .then( function(bs) {
          console.log( 'cheers! Your battery is at %s%', bs.level * 100 );
        }, Function.prototype );
    } catch ( e ) {}
}
