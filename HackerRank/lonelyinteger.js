

function lonelyinteger(a) {

	return a.reduce((acc, cur) => acc ^ cur, 0);

}