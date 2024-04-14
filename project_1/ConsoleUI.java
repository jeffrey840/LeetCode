package project_1;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class ConsoleUI {
    private AppointmentBST bst;

    public ConsoleUI() {
        this.bst = new AppointmentBST();
    }

    public void start() {
        Scanner scanner = new Scanner(System.in);
        int choice;
        do {
            System.out.println("1. Schedule Appointment");
            System.out.println("2. Display All Appointments");
            System.out.println("3. Exit");
            System.out.print("Enter choice: ");
            choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline left-over

            switch (choice) {
                case 1:
                    scheduleAppointment(scanner);
                    break;
                case 2:
                    bst.displayAppointments();
                    break;
                case 3:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 3);
        scanner.close();
    }

    private void scheduleAppointment(Scanner scanner) {
        System.out.print("Enter Patient ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Patient Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Appointment Time (YYYY-MM-DD HH:MM): ");
        String timeInput = scanner.nextLine();
        LocalDateTime time = LocalDateTime.parse(timeInput, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));

        PatientAppointment newAppointment = new PatientAppointment(id, name, time);
        bst.addAppointment(newAppointment);
        System.out.println("Appointment scheduled successfully.");
    }

    public static void main(String[] args) {
        ConsoleUI ui = new ConsoleUI();
        ui.start();
    }
}
/*

1
2
jeff
2023-01-01 12:12

*/

