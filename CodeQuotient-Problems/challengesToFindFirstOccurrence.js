function firstIndexofK(arr, n, k) {
	// Write your code here
	let l = 0,
		r = n - 1;
	let index;
	while (l <= r) {
		let mid = Math.floor((l + r) / 2);
		if (arr[mid] === k) {
			if (arr[mid - 1] == k) r = mid - 1;
			else return mid;
		} else if (arr[mid] < k) l = mid + 1;
		else r = mid - 1;
	}
	return -1;
}
// Return the final answer
function solveChallenges(arr, challenges) {
  // Write your code here
    let sum = 0;
	for (let i = 0; i < challenges.length; i++) {
		sum = sum + firstIndexofK(arr, arr.length, challenges[i]);
	}
	return sum;
}