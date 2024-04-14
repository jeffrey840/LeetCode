package project_1;


public class AppointmentBST {
    private AppointmentNode root;

    public AppointmentBST() {
        this.root = null;
    }

    public void addAppointment(PatientAppointment appointment) {
        root = insertRec(root, appointment);
    }

    private AppointmentNode insertRec(AppointmentNode root, PatientAppointment appointment) {
        if (root == null) {
            root = new AppointmentNode(appointment);
            return root;
        }

        // Assume appointment times are unique and sorted lexicographically
        if (appointment.appointmentTime.compareTo(root.data.appointmentTime) < 0) {
            root.left = insertRec(root.left, appointment);
        } else if (appointment.appointmentTime.compareTo(root.data.appointmentTime) > 0) {
            root.right = insertRec(root.right, appointment);
        }
        return root;
    }

    // Methods for searching and deletion by appointment time or patient ID omitted for brevity
}

