let favNumber = 7;
let baseURL = "http://numbersapi.com";

async function function1() {
	let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
	console.log(data);
}
function1();

const favNumbers = [7, 3, 14];
async function function2() {
	let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
	console.log(data);
}
function2();

async function function3() {
	let facts = await Promise.all(
		Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
	);
	facts.forEach((data) => {
		$("body").append(`<p>${data.text}</p>`);
	});
}
function3();
