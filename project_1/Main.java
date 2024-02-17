//// path/filename: StateLinkedListEnhanced.java
//
//import java.util.List;
//
//// Enhancing the LinkedList class with new methods
//class Main {
//    Node head;
//
//    // Existing methods (addState, deleteState, printStates) are assumed to be here
//
//    // Method to update neighbors of a given state
//    public void updateStateNeighbors(String stateName, List<String> newNeighbors) {
//        Node current = head;
//        while (current != null) {
//            if (current.stateName.equals(stateName)) {
//                current.neighbors = newNeighbors;
//                return;
//            }
//            current = current.next;
//        }
//        System.out.println("State not found: " + stateName);
//    }
//
//    // Method to find a state by name
//    public Node findState(String stateName) {
//        Node current = head;
//        while (current != null) {
//            if (current.stateName.equals(stateName)) {
//                return current;
//            }
//            current = current.next;
//        }
//        return null; // State not found
//    }
//
//    // Method to reverse the linked list
//    public void reverseList() {
//        Node prev = null;
//        Node current = head;
//        Node next = null;
//        while (current != null) {
//            next = current.next;
//            current.next = prev;
//            prev = current;
//            current = next;
//        }
//        head = prev;
//    }
//
//}
//
//// Enhancing the TestLinkedList class to demonstrate new functionalities
//class TestLinkedList {
//    public static void main(String[] args) {
//        LinkedList list = new LinkedList();
//        // Assume addState and other operations are here
//
//        // Update neighbors for a state
//        list.updateStateNeighbors("State1", List.of("NewNeighbor1", "NewNeighbor2"));
//        System.out.println("After updating neighbors of State1:");
//        list.printStates();
//
//        // Find and print a specific state
//        Node foundState = list.findState("State2");
//        if (foundState != null) {
//            System.out.println("Found State: " + foundState.stateName + ", Neighbors: " + foundState.neighbors);
//        } else {
//            System.out.println("State not found.");
//        }
//
//        // Reverse the list and print
//        list.reverseList();
//        System.out.println("After reversing the list:");
//        list.printStates();
//    }
//}
