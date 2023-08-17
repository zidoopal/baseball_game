const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const makeRandomNum = () => {
  let randomNum = '';

  randomNum += Math.floor(Math.random() * 10);

  // 두 번째, 세 번째 숫자 생성
  do {
    const ranNum = Math.floor(Math.random() * 10);
    if (!randomNum.includes(ranNum.toString())) {
      randomNum += ranNum;
    }
  } while (randomNum.length < 3);

  return randomNum;
};

const compareNum = (num, ans) => {
  let s = 0;
  let b = 0;

  if (num.length !== 3) return '';

  for (let i = 0; i < num.length; i++) {
    if (num[i] === ans[i]) s++;
    else if (num.includes(ans[i])) b++;
  }

  return `${b}B${s}S`;
};

const playBaseball = () => {
  const num = makeRandomNum();
  let count = 0;

  console.log('컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!');

  const run = () => {
    rl.question('3자리 숫자를 입력해 주세요 : ', (answer) => {
      const result = compareNum(num, answer);
      console.log(result);
      count++;

      if (answer.length !== 3) {
        console.log('3자리 숫자를 정확하게 입력해주세요');
        run();
        return;
      }
      if (result.endsWith('3S')) {
        console.log(
          `정답은 ${num}\n${count}번만에 맞히셨습니다.\n게임을 종료합니다.`
        );
        rl.close();
      } else {
        run();
      }
    });
  };

  run();
};

playBaseball();
