var detectCycle = function (head) {
    
    let tortoise = head;
    let hare = head;
 
    while (hare && hare.next) {
        tortoise = tortoise.next;
        hare = hare.next.next;
        
        if (tortoise === hare) {
            break;
        }
    }

    if (!hare || !hare.next) {
        return null;
    }

    hare = head;

    while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
    }
   
    return tortoise;
};