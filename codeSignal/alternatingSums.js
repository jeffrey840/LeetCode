function solution(a) {

	let team1 = []
	let team2 = []

	for(let i =0;i<=a.length -1;i++) {
		if(i % 2 === 0) {
			team1.push(a[i])
		} else{
			team2.push(a[i])
		}
	}
	let sumedteam1 = team1.reduce((a,b) => a + b,0)
	let sumedteam2 = team2.reduce((a,b) => a + b,0)

	return [sumedteam1, sumedteam2]
}
