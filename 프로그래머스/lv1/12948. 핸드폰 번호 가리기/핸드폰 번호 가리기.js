function solution(phone_number) {
    const star = phone_number.length-4
    return "*".repeat(star) + phone_number.slice(-4)
}