1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
Answer: The method getElementById finds one element by its unique ID. The method getElementsByClassName finds all elements that have a specific class name and returns them in a collection. The method querySelector finds the first element that matches a CSS selector, and querySelectorAll finds all elements that match a CSS selector and returns them in a list.

2) How do you create and insert a new element into the DOM?  
Answer: To create and insert a new element, first create the element using document.createElement with the desired tag name. Then add text or content to it. Finally, attach it to an existing part of the page using appendChild or append. This way, a new element is added to the webpage structure.

3) What is Event Bubbling and how does it work?  
Answer: Event bubbling means that when an event happens on a child element, it first runs on that element. Then it moves upward step by step through its parent elements until it reaches the top of the document. For example, if you click a button inside a div, the button click is handled first, then the div click, and finally the body click.

4) What is Event Delegation in JavaScript? Why is it useful?  
Answer: Event delegation is a technique where you add a single event listener to the parent element instead of adding event listeners to many child elements. You let the event bubbling system manage the child clicks. This is useful because it makes the program faster, uses less memory, and works for new elements that are added to the parent later.

5) What is the difference between preventDefault and stopPropagation methods?  
Answer: The method preventDefault stops the normal action of the browser, such as preventing a form from submitting or stopping a link from opening. The method stopPropagation stops the event from moving upward to parent elements, so only the current element handles the event.
