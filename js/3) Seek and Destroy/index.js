const destroyer = (arr, ...args) => arr.filter((i) => !args.includes(i));

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
