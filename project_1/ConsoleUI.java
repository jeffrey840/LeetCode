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
            System.out.println("3. Search Appointment By Time");
            System.out.println("4. Cancel Appointment By Time");
            System.out.println("5. Exit");
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
                    searchAppointmentByTime(scanner);
                    break;
                case 4:
                    cancelAppointmentByTime(scanner);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 5);
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

    private void searchAppointmentByTime(Scanner scanner) {
        System.out.print("Enter Appointment Time (YYYY-MM-DD HH:MM) to search: ");
        String timeInput = scanner.nextLine();
        LocalDateTime time = LocalDateTime.parse(timeInput, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        PatientAppointment found = bst.searchByTime(time);
        if (found != null) {
            System.out.println("Appointment Found: ID - " + found.getPatientID() + ", Name - " + found.getPatientName() + ", Time - " + found.getAppointmentTime());
        } else {
            System.out.println("No appointment found at the specified time.");
        }
    }

    private void cancelAppointmentByTime(Scanner scanner) {
        System.out.print("Enter Appointment Time (YYYY-MM-DD HH:MM) to cancel: ");
        String timeInput = scanner.nextLine();
        LocalDateTime time = LocalDateTime.parse(timeInput, DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm"));
        bst.cancelAppointment(time);
        System.out.println("Appointment cancelled successfully.");
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

