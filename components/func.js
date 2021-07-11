export default {
  "func": {
    "tax": {
      "caption": '入力した金額から消費税(10%)価格を計算します。',
      "function": `(...param) => { return Math.floor(param[0] * 1.1 )}`
    },
    "tax2": {
      "caption": '入力した金額から軽減税率(8%)による税込価格を計算します。',
      "function": `(...param) => { return Math.floor(param[0] * 1.08 )}`
    },
    "total": {
      "caption": '10, 20, 30, ...というようにカンマで区切った数字の合計を計算します。',
      "function": `(...param) => {
        let res = 0;
        for(var i of param[0]){
          res += parseInt(i) * 1;
        }
        return res;
      }`
    },
    "factorial": {
      "caption": 'ゼロから入力値までの合計を計算します。',
      "function": `(...param) => {
        let res = 0;
        if(typeof param[0] === 'object') param[0] = param[0][0]
        for(var i = 1; i <= param[0]; i++){
          res += i;
        }
        return res;
      }`
    }
  }
}