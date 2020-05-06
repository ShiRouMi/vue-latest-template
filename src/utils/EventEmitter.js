class Event {
  constructor() {
    this.listeners = {}
  }

  $on(event, fn) {
    const events = this.listeners[event]
    if (!events) {
      this.listeners[event] = []
    }
    this.listeners[event].push(fn)
  }

  $once(event, fn) {
    const vm = this
    function on(...args) {
      vm.$off(event, on)
      fn.apply(vm, args)
    }
    this.$on(event, on)
  }

  $emit(event, context) {
    const events = this.listeners[event]
    if (events && events.length > 0) {
      events.forEach((func) => func(context))
    }
  }

  $off(event, fn) {
    const events = this.listeners[event]
    if (!events || !fn) {
      this.listeners[event] = []
      return
    }
    this.listeners[event] = this.listeners[event].filter((i) => i !== fn)
  }
}

const EventEmitter = {
  listeners: {},
  $on(event, func) {
    const events = this.listeners[event]
    if (!events) {
      this.listeners[event] = []
    }
    this.listeners[event].push(func)
  },
  $once(event, func) {
    const vm = this
    function on(...args) {
      vm.$off(event, on)
      func.apply(vm, args)
    }
    this.$on(event, on)
  },
  $off(event, func) {
    const events = this.listeners[event]
    if (!func || !events) {
      this.listeners[event] = []
      return
    }
    this.listeners[event] = this.listeners[event].filter((i) => i !== func)
  },
  $emit(event, context) {
    const events = this.listeners[event]
    if (events && events.length > 0) {
      events.forEach((func) => {
        func(context)
      })
    }
  },
}

export { EventEmitter }
export default Event