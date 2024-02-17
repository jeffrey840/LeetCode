
package project_1;
import java.util.Arrays;
import java.util.List;

class Node {
    String stateName;
    List<String> neighbors;
    Node next;


    Node(String stateName, List<String> neighbors) {
        this.stateName = stateName;
        this.neighbors = neighbors;
        this.next = null;
    }
}


class LinkedList {
    Node head;

    public void addState(String stateName, List<String> neighbors) {
        Node newNode = new Node(stateName, neighbors);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }


    public void deleteState(String stateName) {
        Node current = head, prev = null;
        if (current != null && current.stateName.equals(stateName)) {
            head = current.next;
            return;
        }
        while (current != null && !current.stateName.equals(stateName)) {
            prev = current;
            current = current.next;
        }
        if (current == null) return;
        prev.next = current.next;
    }

    public void printStates() {
        Node current = head;
        while (current != null) {
            System.out.println("State: " + current.stateName + ", Neighbors: " + current.neighbors);
            current = current.next;
        }
    }

    public void updateStateNeighbors(String stateName, List<String> newNeighbors) {
        Node current = head;
        while (current != null) {
            if (current.stateName.equals(stateName)) {
                current.neighbors = newNeighbors;
                return;
            }
            current = current.next;
        }
        System.out.println("State not found: " + stateName);
    }

    public Node findState(String stateName) {
        Node current = head;
        while (current != null) {
            if (current.stateName.equals(stateName)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }



}

class TestLinkedList {

    public static void main(String[] args) {
        LinkedList list = new LinkedList();

        class StateInfo {
            String name;
            List<String> neighbors;

            StateInfo(String name, List<String> neighbors) {
                this.name = name;
                this.neighbors = neighbors;
            }
        }

        StateInfo[] initialStateInfo = {
                new StateInfo("TX", Arrays.asList("person1", "person2")),
                new StateInfo("CA", Arrays.asList("person3", "person4"))
        };

        System.out.println("Adding initial states and their neighbors:");
        for (StateInfo state : initialStateInfo) {
            list.addState(state.name, state.neighbors);
        }

        System.out.println("\nInitial list of states and their neighbors:");
        list.printStates();

        System.out.println("\nAdding state FL with neighbors person5, person6:");
        list.addState("FL", Arrays.asList("person5", "person6"));
        list.printStates();

        System.out.println("\nUpdating neighbors for TX:");
        list.updateStateNeighbors("TX", Arrays.asList("person7", "person8"));
        list.printStates();

        Node foundState = list.findState("CA");
        if (foundState != null) {
            System.out.println("\nFound state: " + foundState.stateName + ", Neighbors: " + foundState.neighbors);
        } else {
            System.out.println("\nState CA not found.");
        }

        System.out.println("\nDeleting state TX and printing updated list:");
        list.deleteState("CA");
        list.printStates();
    }
}


//This is the output

/*
*
Adding initial states and their neighbors:

Initial list of states and their neighbors:
State: TX, Neighbors: [person1, person2]
State: CA, Neighbors: [person3, person4]

Adding state FL with neighbors person5, person6:
State: TX, Neighbors: [person1, person2]
State: CA, Neighbors: [person3, person4]
State: FL, Neighbors: [person5, person6]

Updating neighbors for TX:
State: TX, Neighbors: [person7, person8]
State: CA, Neighbors: [person3, person4]
State: FL, Neighbors: [person5, person6]

Found state: CA, Neighbors: [person3, person4]

Deleting state TX and printing updated list:
State: TX, Neighbors: [person7, person8]
State: FL, Neighbors: [person5, person6]

*
*
*
* */

