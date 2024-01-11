var partial = function(fn, args) {
	return function (...restArgs) {
		return fn(...args.map(arg => arg === "_" ? restArgs.shift() : arg).concat(restArgs));
	};
};
