package project_1;

import java.time.LocalDateTime;

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


    public PatientAppointment searchByTime(LocalDateTime time) {
        return searchTimeRec(root, time);
    }

    private PatientAppointment searchTimeRec(AppointmentNode root, LocalDateTime time) {
        if (root == null) {
            return null;
        } else if (time.equals(root.data.getAppointmentTime())) {
            return root.data;
        } else if (time.compareTo(root.data.getAppointmentTime()) < 0) {
            return searchTimeRec(root.left, time);
        } else {
            return searchTimeRec(root.right, time);
        }
    }

    // Cancel (remove) appointment by time
    public void cancelAppointment(LocalDateTime time) {
        root = deleteRec(root, time);
    }

    private AppointmentNode deleteRec(AppointmentNode root, LocalDateTime time) {
        if (root == null) return root;

        if (time.compareTo(root.data.getAppointmentTime()) < 0) {
            root.left = deleteRec(root.left, time);
        } else if (time.compareTo(root.data.getAppointmentTime()) > 0) {
            root.right = deleteRec(root.right, time);
        } else {
            // Node with only one child or no child
            if (root.left == null)
                return root.right;
            else if (root.right == null)
                return root.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            root.data = minValue(root.right);

            // Delete the inorder successor
            root.right = deleteRec(root.right, root.data.getAppointmentTime());
        }

        return root;
    }

    private PatientAppointment minValue(AppointmentNode root) {
        PatientAppointment minv = root.data;
        while (root.left != null) {
            minv = root.left.data;
            root = root.left;
        }
        return minv;
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
