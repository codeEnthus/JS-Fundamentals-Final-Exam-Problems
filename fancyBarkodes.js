function fancyBarcodes(input) {
  let number = Number(input.shift())
  let pattern = /(@#+)([A-z][a-zA-Z0-9]{4,}[A-Z])(@#+)/g;
  let digits = /[\d]/g

  let words = []

  for (const w of input) {
    let match = w.match(pattern)
    if (match) {
      let matchDig = match[0].match(digits);
      if (!matchDig){
        console.log(`Product group: 00`)
      }else {
        console.log(`Product group: ${matchDig.join('')}`)
      }
      words.push(match[0])
    }else {
      console.log('Invalid barcode');
    }
  }
}
fancyBarcodes([ '3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##' ])