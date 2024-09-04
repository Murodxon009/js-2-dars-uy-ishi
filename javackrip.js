// Tug'ilgan yilni kiritish
let birthYear = prompt("Tug'ilgan yilingizni kiriting:");

// Hozirgi yilni kiritish
let currentYear = prompt("Hozirgi yilni kiriting:");

// Foydalanuvchining hozirgi yoshi
let currentAge = currentYear - birthYear;

// 30 yoshga to'lish uchun qancha yil kerak
let yearsTo30 = 30 - currentAge;

// Agar foydalanuvchi allaqachon 30 yoshdan katta bo'lsa
if (yearsTo30 <= 0) {
    alert("Siz allaqachon 30 yoshga to'lgansiz yoki undan kattasiz!");
} else {
    // 30 yoshga to'lgunga qadar kunlar, soatlar, minutlar va soniyalarni hisoblash
    let days = yearsTo30 * 365; // O'rtacha
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;

    // Natijani chiqarish
    alert(`${yearsTo30} yildan keyin 30 yoshga to'lasiz. Bu taxminan ${days} kun, ${hours} soat, ${minutes} minut va ${seconds} sekund.`);
}
