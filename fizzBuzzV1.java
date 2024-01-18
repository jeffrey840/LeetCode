import java.util.ArrayList;
import java.util.List;

class fizzBuzzV1 {
    public List<String> fizzBuzz(int n) {
        List<String> answer = new ArrayList<>(n);

        for(int i = 1; i <= n; i++) {

            boolean divisibleBy3 = i % 3 == 0;
            boolean divisibleBy5 = i % 5 == 0;

            if (divisibleBy5 && divisibleBy3) {
                answer.add("FizzBuzz");
            } else if (divisibleBy5) {
                answer.add("Buzz");
            } else if (divisibleBy3) {
                answer.add("Fizz");
            } else {
                answer.add(String.valueOf(i));
            }
        }
        return answer;
    }
}