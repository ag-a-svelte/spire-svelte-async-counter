import { writable } from "svelte/store";

// Creates a counter store and a wrapper function for the given func
export function create_counter_wrapper(func) {
  const counter = writable(0);
  const wrapper = wrap(func);

  function wrap(func) {
    return async (...a) => {
      counter.update(n => n + 1); // increment
      const result = await func(...a);
      counter.update(n => n - 1); // decrement
      return result;
    };
  }

  return [counter, wrapper];
}

// table of [counter, wrapper] pairs looked up by func
const counter_wrappers = [];

// Creates OR fetches a SHARED counter store and a wrapper function for the given func
export function get_counter_wrapper(func) {
  return typeof counter_wrappers[func] === "undefined"
    ? counter_wrappers[func] = create_counter_wrapper(func)
    : counter_wrappers[func]
}