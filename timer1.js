const timer = function() {
  let intervalArray = process.argv.slice(2);
  for (let interval of intervalArray) {
    const num = parseInt(interval);
    if (num && num > 0) {
      setTimeout(() => {
        process.stdout.write('beep\n');
      }, num * 1000);
    }
  }
};

timer();