function solution(my_string) {
  let answer = "";

  let newWord = new Set([...my_string]);

  for (let x of newWord) {
    answer += x;
  }

  return answer;
}