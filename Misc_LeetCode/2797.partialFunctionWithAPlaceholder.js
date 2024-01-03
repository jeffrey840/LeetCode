
function partial(fn, args) {
	return function () {
		const modifiedArgs = args.slice();

		for (let i = 0; i < modifiedArgs.length; i++) {
			if (modifiedArgs[i] === "_") {
				if (arguments.length > 0) {
					modifiedArgs[i] = arguments[0];
					arguments = Array.prototype.slice.call(arguments, 1);
				}
			}
		}

		modifiedArgs.push.apply(modifiedArgs, arguments);

		return fn.apply(null, modifiedArgs);
	};
}

