function solution(yourLeft, yourRight, friendsLeft, friendsRight) {


	// Determine the strongest and weakest arm for yourself
	const yourStrongest = Math.max(yourLeft, yourRight);
	const yourWeakest = Math.min(yourLeft, yourRight);

	// Determine the strongest and weakest arm for your friend
	const friendsStrongest = Math.max(friendsLeft, friendsRight);
	const friendsWeakest = Math.min(friendsLeft, friendsRight);

	// Compare strongest and weakest arms
	return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;


}
