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
const numberOfSeries = prompt("Nechta serial ko’rdingiz?")
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
}

const a = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const b = prompt('Necha baxo berasiz', '')
const c = prompt("Oxirgi ko'rgan serialingizni kiriting", '')
const d = prompt('Necha baxo berasiz', '')

seriesDB.series[a] = b
seriesDB.series[c] = d