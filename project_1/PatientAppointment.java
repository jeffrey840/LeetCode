package project_1;

public class PatientAppointment {

    int patientID;
    String patientName;
    String appointmentTime; // Use a sortable format, e.g., "YYYY-MM-DD HH:MM"

    public PatientAppointment(int patientID, String patientName, String appointmentTime) {
        this.patientID = patientID;
        this.patientName = patientName;
        this.appointmentTime = appointmentTime;
    }

    // Getters and setters (omitted for brevity)

}
class AppointmentNode {
    PatientAppointment data;
    AppointmentNode left, right;

    public AppointmentNode(PatientAppointment data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}



