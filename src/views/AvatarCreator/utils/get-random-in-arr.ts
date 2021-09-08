export function getRandomValueInArr(
  arr: Array<Record<string, any>>,
  weightKey = 'weight',
) {
  const tmpArr: Array<number> = [];
  arr.forEach((el, index) => {
    const weight = el[weightKey];
    for (let i = 0; i < weight; i++) tmpArr.push(index);
  });
  tmpArr.sort(() => 0.5 - Math.random());
  const len = tmpArr.length;
  const randomIndex = parseInt((Math.random() * 10000).toFixed(0)) % len;
  return arr[tmpArr[randomIndex]];
}
