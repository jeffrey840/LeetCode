package project;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CarManager {
    private List<Car> cars = new ArrayList<>();

    public void loadCars(String fileName) throws IOException {
        BufferedReader br = new BufferedReader(new FileReader(fileName));
        String line = br.readLine();
        while (line != null) {
            String[] tokens = line.split(",");
            String make = tokens[0].trim();
            String model = tokens[1].trim();
            int year = Integer.parseInt(tokens[2].trim());
            cars.add(new Car(make, model, year));
            line = br.readLine();
        }
        br.close();
    }

    public void displayCars() {
        for (Car car : cars) {
            System.out.println(car);
        }
    }

    public void searchByModel(String model) {
        boolean found = false;
        for (Car car : cars) {
            if (car.getModel().equalsIgnoreCase(model)) {
                System.out.println("Found car: " + car);
                found = true;
            }
        }
        if (!found) {
            System.out.println("No cars found with model: " + model);
        }
    }

    public static void main(String[] args) throws IOException {
        CarManager manager = new CarManager();
        manager.loadCars("cars.txt");
        manager.displayCars();


        manager.searchByModel("Aviator");
    }
}
