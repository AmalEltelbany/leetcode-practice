/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
       let right = head;  
         let left = head;  
           for (let i = 0; i < n; i++) {     
               right = right.next;    
               }   
             if (!right) {  
                  return head.next;  
                  }   
                  
             while (right.next != null) 
             {        right = right.next;     
                left = left.next;   
                 } 
                 
                    left.next = left.next.next;    
                    return head;
};