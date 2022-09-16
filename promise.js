const {
  promiseTheaterIXX,
  promiseTheaterVGC
} = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expresion) => {
  let sum = 0;
  try {
    const IXX = await promiseTheaterIXX();
    const VGC = await promiseTheaterVGC();
    const result = [...IXX, ...VGC]; //Gabungkan hasil IXX dan VGC ?
    //console.log(promiseOutput)
    //Element itu data dari IXX dan VGC dan hasil adalah nama KEY nya
    result.forEach((Element) => { //Looping
      if (Element.hasil == expresion) {
        sum++;
        //console.log(sum++);
      }
    });
    if (sum > 0) {
      return sum;
      //console.log(sum);
    };
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  promiseOutput,
};