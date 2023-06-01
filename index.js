// The Start/Stop, Add Node, Remove Node, and Reset buttons
const startStop = document.querySelector("#startStop");
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
// Node counter
const counter = document.querySelector("#counter");
// Node display area
const display = document.querySelector("#display");
let numberOfDisplayedNodes = 0;

// 'Add Node' button listener and handler
addNodes.addEventListener("click", () => {
  if( startStop.classList.contains("active") ) {
    // Create a new paragraph element
    const newPara = document.createElement("p");
    // Add the current time to the new paragraph
    newPara.textContent = `The time is ${new Date().toLocaleTimeString()}`;
    // Append the new paragraph element to its container
    display.appendChild(newPara);
  }
});

// 'Remove Node' button listener and handler
removeNodes.addEventListener("click", () => {
  if( startStop.classList.contains("active") ) {
    const lastChild = display.lastChild;
    if (lastChild) {
      display.removeChild(lastChild);
    }
  }
});

// 'Reset' button listener and handler
reset.addEventListener("click", () => self.location.reload());

// Log any newly added nodes
function logNodeCount(records) {
  console.log("The mutation records object: ", records)
  for (const record of records) {
    console.log("The single record for this loop through: ", record)
    // Check if the childlist of the target node has been mutated
    if (record.type === "childList") {

      // Set the new total number of added nodes to the previous total plus any newly added nodes minus any removed nodes
      numberOfDisplayedNodes = numberOfDisplayedNodes + record.addedNodes.length - record.removedNodes.length;
      // Log the number of nodes currently displayed
      counter.textContent = `Node count: ${numberOfDisplayedNodes}.`;

    
      // If adding a node, identify the observed node to which the new node was added
      if(record.removedNodes.length === 0){
        display.lastChild.textContent += ` and we're observing the "${record.target.id}" element.`
      }
    }
  }
}

const options = {
  childList: true,
  attributes: true,
  characterData: false,
  subtree: false,
  attributeFilter: [],
  attributeOldValue: false,
  characterDataOldValue: false
}

// Create the mutation observer
const observer = new MutationObserver(logNodeCount);
console.log("New observer: ", observer);

// 'Start/Stop' button listener and handler
startStop.addEventListener("click", () => {
  startStop.classList.toggle("active");
  // Start observing
  if (startStop.classList.contains("active")) {
    // When the display div's children mutate, fire logNodeCount
    observer.observe(display, options);
    console.log("Observer is observing");
  // Disconnect
  } else {
    observer.disconnect();
    console.log("Observer disconnected");
  }
});