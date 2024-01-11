public class runningSumOf1DArray {

    public int[] runningSum(int[] nums) {
        int[] result = new int[nums.length];
        result[0] = nums[0];
        for(int i = 1; i < nums.length;i++) {
            result[i] = nums[i] + result[i-1];
        }
        return result;
    }

    public static void main(String[] args) {
        runningSumOf1DArray obj = new runningSumOf1DArray();
        int[] nums = {1, 2, 3, 4}; // example input
        int[] sum = obj.runningSum(nums);

        // print the result
        for(int i=0; i<sum.length; i++){
            System.out.print(sum[i]+" ");
        }
    }

}
