/* Uyga vazifa:
1-) numberOfSeries nomli o’zgaruvchi yarating va unga “Nechta serial ko’rdingiz?” degan javobini qo’ying. 

2-) seriesDB nomli object yasang va unga quydagi xususiyatlarni yozib chiqing:
- count - bu yerga birinchi savoldagi javob qo’yilish kerak.
- series- bu yerga bo’sh object yozing.
- actors - bosh object joylang.
- genres - bu yerga bo’sh massiv joylang
- privat - bu yerda boolean ma’lumot turi bo’lishi kerak, boshlang’ich qiymat false bo’lsin.

3-) Foydalanuvchiga ushbu savolni ikki marotaba bering:
- “Oxirgi ko’rgan serialingiz?”
- “Nechi baxo berasiz?”
Ushbu savollardagi javobni o’zgaruvchilarga joylashtirishingiz kerak.
Javoblarni series objectga quyidagi formatda joylang:
series: {
	“Ahmad ibn Hanbal”: “10”,
	“Umar ibn Hattob”: “10”
}
 */
/* 
1-) Serial haqida bergan savollarimizni kodini optimillashtirish.

2-) Foydalanuvchi bizni savollarimizni bo’sh qoldirmasligi kerak va cancel tugamni bosgan taqdirda ham biz savollarni qayta qayta berishimiz kerak, javob bermagunga qadar. Ushbu vazifa tsikl yordamida qilinadi.

3-) Shartli operator yordamida foydalanuvchi ko’rgan seriallar sonin tekshirib agar u 5 dan kam serial ko’rgan bo’lsa unga consolega “Kam serial ko’ripsiz” xabarni ko’rsatishimiz kerak, agarda 5 va 10 oralig’ida ko’rgan bo’lsa “Siz classik tamoshabin ekansiz” deyishimiz kerak, agarda 10 dan ziyod ko’rgan bo’lsa “Siz serialchi zvezda ekansiz” yozuv chiqarishimiz kerak.
*/
const numberOfSeries = +prompt("Nechta serial ko’rdingiz?")
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
}
let count = 0;
while (count < 2) {
		const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '') 
			b = prompt('Necha baxo berasiz', '')
		if(a && b) {
			seriesDB.series[a] = b
			count++
		}

}

if (seriesDB.count < 5) {
  console.log('Kam serial ko’ripsiz')
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log('Siz classik tamoshabin ekansiz')
} else if (seriesDB.count >= 10) {
  console.log('Siz serialchi zvezda ekansiz')
} else {
  console.log('Error')
}
console.log(seriesDB)