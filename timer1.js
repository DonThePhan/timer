let times = process.argv.slice(2);

for (let numChar of times) {
  let num = Number(numChar);

  if (isNaN(num) || num < 0) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000);
  }
}
