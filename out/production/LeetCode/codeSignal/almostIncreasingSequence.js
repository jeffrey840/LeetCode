function solution(sequence) {
	let removalsNeeded = 0;

	for (let i = 1; i < sequence.length && removalsNeeded <= 1; i++) {
		if (sequence[i - 1] >= sequence[i]) {
			removalsNeeded++;
			if (i > 1 && sequence[i - 2] >= sequence[i] && i < sequence.length - 1 && sequence[i - 1] >= sequence[i + 1]) {
				return false;
			}
		}
	}

	return removalsNeeded <= 1;
}
