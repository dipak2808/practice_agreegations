let data = "welcome to tagline";
// 
function test(str,sep) {
    return str.split(sep).reverse().join(sep)
}

const t = test(data,'')
console.log('test(t,) :>> ', test(t,' '));