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

        if (appointment.getAppointmentTime().compareTo(root.data.getAppointmentTime()) < 0) {
            root.left = insertRec(root.left, appointment);
        } else if (appointment.getAppointmentTime().compareTo(root.data.getAppointmentTime()) > 0) {
            root.right = insertRec(root.right, appointment);
        }
        return root;
    }

    // In-order traversal to view appointments in order
    public void inOrderTraversal(AppointmentNode node) {
        if (node != null) {
            inOrderTraversal(node.left);
            System.out.println("Appointment ID: " + node.data.getPatientID() + " Name: " + node.data.getPatientName() +
                    " Time: " + node.data.getAppointmentTime());
            inOrderTraversal(node.right);
        }
    }

    // Public method to start traversal from root
    public void displayAppointments() {
        inOrderTraversal(root);
    }
}
