const button = document.querySelector("button");
const parent = document.querySelector(".parent");

if (button === null || parent === null) {
  throw Error("unable to find button");
}

const map = {
  [Event.NONE]: 'none',
  [Event.CAPTURING_PHASE]: 'capture',
  [Event.AT_TARGET]: 'target',
  [Event.BUBBLING_PHASE]: 'bubbling',
}

// todo
/* 
console.log(Event.NONE)
console.log(Event.CAPTURING_PHASE)
console.log(Event.AT_TARGET)
console.log(Event.BUBBLING_PHASE) 
*/

function onClick(event){
   console.log("event phase", map[event.eventPhase])
  // console.log("target", event.target)
 //  console.log("currentTarget", event.currentTarget)
 //  console.log("bubbles", event.bubbles)
 //  console.log("cancelable", event.cancelable)
 //  console.log("composed", event.composed)
 //  console.log("isTrusted", event.isTrusted)
 //  console.log("timeStamp", event.timeStamp)
 //  console.log("defaultPrevented", event.defaultPrevented)

/* 
 console.log("currentTarget", event.currentTarget)
 setTimeout(() => {
   console.log("currentTarget", event.currentTarget)
 }, 3000) 
 */
}

parent.addEventListener('click', onClick, {
  capture: true
})