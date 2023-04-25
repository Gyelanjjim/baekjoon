function solution(str_list) {
  const l_idx = str_list.indexOf('l');
  const r_idx = str_list.indexOf('r');

  if (l_idx === -1 && r_idx === -1) {
    return [];
  } else if (l_idx !== -1 && r_idx === -1) {
    return str_list.slice(0, l_idx);
  } else if (l_idx === -1 && r_idx !== -1) {
    return str_list.slice(r_idx + 1);
  } else {
    return l_idx < r_idx ? str_list.slice(0, l_idx) : str_list.slice(r_idx + 1);
  }
}
