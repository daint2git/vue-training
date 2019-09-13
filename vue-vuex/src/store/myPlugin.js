import _cloneDeep from 'lodash-es/cloneDeep'

const myPlugin = store => {
  let prevState = _cloneDeep(store.state)

  store.subscribe((mutation, state) => {
    const nextState = _cloneDeep(state)
    // save state for next mutation
    console.log('*****')
    console.log('prevState', prevState)
    console.log('nextState', nextState)
    prevState = nextState
    console.log('*****')
    console.log(mutation)
  })
}

export default myPlugin
