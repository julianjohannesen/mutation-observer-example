// The buttons
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
// Node counter
const counter = document.querySelector("#counter");
// Node display area
const target = document.querySelector("#target");
let totalAddedNodes = 0;

// 'Add Node' button listener
addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  target.appendChild(newPara);
});

// 'Remove Node' button listener
removeNodes.addEventListener("click", () => {
  const lastChild = target.lastChild;
  if (lastChild) {
    target.removeChild(lastChild);
  }
});

// 'Reset' button listener
reset.addEventListener("click", () => self.location.reload());

// Log any newly added nodes
function logNewNodes(records) {
    for (const record of records) {
        // Check if the childlist of the target node has been mutated
        if (record.type === "childList") {
            // Set the new total number of added nodes
            totalAddedNodes = totalAddedNodes + record.addedNodes.length;
            // Log the number of nodes added
            counter.textContent = `Total added nodes: ${totalAddedNodes}`;
        }
    }
}

const mutationObserverInitObject = {
    childList: true,
}

const observer = new MutationObserver(logNewNodes);
observer.observe(target, mutationObserverInitObject);