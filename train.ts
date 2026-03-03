//  ******************************************************
//  ******************************************************
//  ******************************************************
//  ******************************************************
//  ******************************************************
// TASK ZU:

// Shunday function yozing, va bu function parametr sifatida
// raqamlardan iborat array'ni qabul qilsin. Function'ning vazifasi,
// berilgan parametr array tarkibida takrorlanmagan raqamlarni topib
// ularni yig'indisini qaytarsin.

function sumOfUnique(arr:number[]) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
			sum += arr[i];
		}
	}

	return sum;
}

console.log(sumOfUnique([1, 2, 3, 2]));  

// MASALAN: sumOfUnique([1,2,3,2]); return 4;

// Yuqoridagi misolda, argument sifatida pass qilinayotgan array
// tarkibida bir marotabadan ortiq takrorlanmagan raqamlar, bular '1', '3'.
// Va natija sifatida yig'indi 4'ga teng.

//  ******************************************************

// TASK ZT:

// Shunday function yozing, bu function parametrdagi string ichida
// bir marotabadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin
// function firstUniqueCharIndex(input: string): Number {
// 	const store = {};

// 	for (const char of input) {
// 		store[char] = (store[char] | 0) + 1;
// 	}
// 	for (let i = 0; i < input.length; i++) {
// 		if (store[input[i]] === 1) return i;
// 	}

// 	console.log('store', store);
// 	return null;
// }
// console.log(firstUniqueCharIndex('lalalalay'));
// console.log(firstUniqueCharIndex('stamp'));
// MASALAN: firstUniqueCharIndex(“stamp”); return 0;

// Yuqoridagi misolda, 'stamp' so'zi tarkibida barcha harflar bir marotabadan
// ortiq takrorlanmagan, lekin shartga muvofiq, birinchi topilgan harf indeksi qaytarilmoqda.

//  ******************************************************
//  ******************************************************
//  ******************************************************

// function singleNumber(nums: number[]): number {
// 	let result = 0;
// 	for (const num of nums) {
// 		result ^= num; //
// 	}
// 	return result;
// }

// console.log(singleNumber([4, 2, 1, 2, 1])); // 4

//  ******************************************************

// TASK ZR:

// Shunday function yozing, bu function,
// berilgan parametr string tarkibidagi raqam va sonlarni
// sanab object sifatida qaytarsin.

// function countNumberAndLetters(str: string) {
// 	let result = { number: 0, letter: 0 };

// 	for (let char of str) {
// 		if (/[0-9]/.test(char)) result.number++;
// 		else if (/[a-zA-Z]/.test(char)) result.letter++;
// 	}
// 	return result;
// }
// console.log(countNumberAndLetters('string152%¥'));

// MASALAN: countNumberAndLetters(“string152%\¥”); return {number: 3, letter: 6};

//  ******************************************************

// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
// 	return arr1.every(ele => arr2.includes(ele));
//   }

//   console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));   // true
//   console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); // true
//   console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));   // false

// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(text: string) {
// 	// console.log('text:', text);
// 	const result: number = text.split('').filter((ele) => ele === '(').length;
// 	const result2: number = text.split('').filter((ele) => ele === ')').length;

// 	if (result === result2) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(areParenthesesBalanced('string(ichida(qavslar)soni()balansda'));
// console.log(areParenthesesBalanced('string(ichid)a(qavslar)soni()balansda'));
// console.log(areParenthesesBalanced('string(ich)ida(qavslar)soni()balansda'));
// console.log(areParenthesesBalanced('string(ichida(qavslar)soni()balansda'));
//  ******************************************************

// Shunday function yozing, u 2 ta array parametr qabul qilsin.
// Siz bu ikki arrayning qiymatlari o'xshash bo'lishini
// (ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// function areArraysEqual(arr1: any[], arr2: any[]): boolean {
// 	if (arr1.length === 0 && arr2.length === 0) return true;
// 	const set1 = new Set(arr1);
// 	const set2 = new Set(arr2);

// 	for (const val of set1) {
// 		if (!set2.has(val)) return false;
// 	}
// 	for (const val of set2) {
// 		if (!set1.has(val)) return false;
// 	}

// 	return true;
// }

// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1]));
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

// MASALAN:
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false

//  ******************************************************

// TASK ZN:

// Shunday function yozing, uni array va number parametri bo'lsin.
// Function'ning vazifasi ikkinchi parametr'da berilgan raqam, birinchi
// array parametr'ning indeksi bo'yicha hisoblanib, shu indeksgacha bo'lgan
// raqamlarni indeksdan tashqarida bo'lgan raqamlar bilan o'rnini
// almashtirib qaytarsin.

// function rotateArray(arrNumbers: number[], num: number) {
// 	return arrNumbers.slice(num + 1).concat(arrNumbers.slice(0, num + 1));
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3); return [5, 6, 1, 2, 3, 4];

//  ******************************************************

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// function reverseInteger(num: number): number {
// 	const isNegative = num < 0;
// 	const reversedNum = Number(Math.abs(num).toString().split('').reverse().join(''));
// 	return isNegative ? -reversedNum : reversedNum;
// }

// console.log(reverseInteger(123456789));
// console.log(reverseInteger(-123456789));

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda.

//  ******************************************************

// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin

// function printNumbers() {
// 	let times = 1;
// 	const count: any = 5;
// 	const test = setInterval(() => {
// 		for (let i: any = 1; i <= 5; i++) {
// 			console.log(i);
// 		}

// 		console.log(`${times++} marta ishga tushdi`);

// 		if (times > 5) {
// 			clearInterval(test);
// 		}
// 	}, 1000);
// }

// // MASALAN: printNumbers();
// printNumbers();
