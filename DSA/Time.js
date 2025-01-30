/*
Coding exercise
You are developing a text messaging application that needs to implement a feature for message deduplication within a time window. Given a stream of messages where each message contains a string content and timestamp (in seconds), write a function that returns true if the message is unique within the last 10 seconds, and false if it's a duplicate. A message is considered a duplicate if identical content was seen in the previous 10 seconds window from the current message's timestamp.

EXAMPLE 1
Input:isUnique('Hello', 1), isUnique('World', 2), isUnique('Hello', 5)

Output:true, true, false

Explanation:First 'Hello' at t=1 is unique, 'World' at t=2 is unique, second 'Hello' at t=5 is duplicate as it's within 10s of first 'Hello'

EXAMPLE 2
Input:isUnique('Hi', 1), isUnique('Hi', 12), isUnique('Hi', 13)

Output:true, true, false

Explanation:First 'Hi' at t=1 is unique, second 'Hi' at t=12 is unique (>10s passed), third 'Hi' at t=13 is duplicate (within 10s of t=12)

Requirements
1
Function should take two parameters: message content (string) and timestamp (integer)
2
Return true if message is unique within 10 seconds window, false if duplicate
3
Messages outside the 10-second window should be forgotten
4
Solution should handle continuous stream of messages efficiently
5
Optimize for both time and space complexity
6
Consider edge cases like empty messages
*/

class MessageDeduplicator {
    constructor() {
      this.messageMap = new Map(); // Map to store message content and their latest timestamp
    }
  
    isUnique(content, timestamp) {
      // If the content is empty, consider it invalid and return false
      if (!content) return false;
  
      // Clean up old messages that are outside the 10-second window
      for (const [key, time] of this.messageMap.entries()) {
        if (timestamp - time > 10) {
          this.messageMap.delete(key);
        }
      }
  
      // Check if the message is unique
      if (this.messageMap.has(content) && timestamp - this.messageMap.get(content) <= 10) {
        return false; // Duplicate message
      }
  
      // Update the map with the current message's timestamp
      this.messageMap.set(content, timestamp);
      return true; // Unique message
    }
  }
  
  // Example usage:
  const deduplicator = new MessageDeduplicator();
  
  console.log(deduplicator.isUnique('Hello', 1)); // true
  console.log(deduplicator.isUnique('World', 2)); // true
  console.log(deduplicator.isUnique('Hello', 5)); // false
  
  console.log(deduplicator.isUnique('Hi', 1)); // true
  console.log(deduplicator.isUnique('Hi', 12)); // true
  console.log(deduplicator.isUnique('Hi', 13)); // false
  