const nums = [10, 20, 30, 40, 50];
var [a,,b] = nums
var [,c,,d] = nums
nums[0]=b,nums[2]=a;
nums[1]=d,nums[3]=c;
console.log(nums);