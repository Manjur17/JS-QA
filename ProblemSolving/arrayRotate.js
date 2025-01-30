var rotate = function (nums, k) {
    let n = nums.length;
    if (k > n) k = k % n;

    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[(i + k) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = arr[i]
    }
};

function rotateArr(arr, k) {
    let n = arr.length;

    if (k >= n) {
        k %= n;
    }

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}