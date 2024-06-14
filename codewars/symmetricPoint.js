function symmetricPoint(P, Q) {
	const Px = P[0];
	const Py = P[1];
	const Qx = Q[0];
	const Qy = Q[1];
	const P1x = 2 * Qx - Px;
	const P1y = 2 * Qy - Py;
	return [P1x, P1y];
}



