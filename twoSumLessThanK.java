import java.util.Arrays;

public class twoSumLessThanK {

    public int answer(int[] nums, int k) {

        Arrays.sort(nums);
        int ans = -1;
        int left = 0;
        int right = nums.length -1;
        while (left < right) {
            int sum = nums[left] + nums[right];
            if(sum < k) {
                ans = Math.max(ans, sum);
                left++;
            } else {
                right--;
            }
        }

        return ans;
    }

    public static void main(String[] args) {
        twoSumLessThanK obj = new twoSumLessThanK();

        int[] nums = {10, 20, 30}; // Example array
        int k = 40; // Example target value

        int result = obj.answer(nums, k);
        System.out.println("The maximum sum less than " + k + " is: " + result);
    }


}
