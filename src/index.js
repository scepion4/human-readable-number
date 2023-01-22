module.exports = function toReadable(number) {
   let str = String(number)
   let middStr=+(str.slice(-2))
   let last = +(str.slice(-1))
   let first = +(str.slice(0, 1))
   let midd = +(str.slice(1, 2))
   let midTab = midd == 0 ? '' : ' '
   let lastTab = last === 0 ? '' : ' '
   const num = {
      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety'
   }
   if(number===0) return 'zero'
   if (number < 21) {
      return num[number]
   }
   if (number < 100) {
      return (num[(first * 10)] + ' ' + num[last]).trim()
   }
   if(midd!==0&&middStr<21&&number>100){
      return num[first]+' '+'hundred'+' '+num[middStr]
    }
   if (number < 1000) {
      return num[first] + ' ' + 'hundred' + midTab + num[(midd * 10)] + lastTab + num[last]
   }
}
