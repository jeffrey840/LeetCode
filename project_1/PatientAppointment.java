package project_1;

import java.time.LocalDateTime;

public class PatientAppointment {
    private int patientID;
    private String patientName;
    private LocalDateTime appointmentTime;

    public PatientAppointment(int patientID, String patientName, LocalDateTime appointmentTime) {
        this.patientID = patientID;
        this.patientName = patientName;
        this.appointmentTime = appointmentTime;
    }

    // Getters and setters
    public int getPatientID() {
        return patientID;
    }

    public void setPatientID(int patientID) {
        this.patientID = patientID;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public LocalDateTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalDateTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }
}



