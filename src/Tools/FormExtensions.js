 export function onChange (event) {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    const newState = {};
    newState[name] = value
    this.setState(newState)
  }
