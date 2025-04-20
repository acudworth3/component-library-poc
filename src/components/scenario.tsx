import { useState } from "react"

type Props = {
  value: string
  dataTestId?: string
  onClose?: () => void
  // my linter didnt' seem to like kebab-case so I renamed this

}

// I am fighting with typescript to get these tests running . 
// These are some brief notes on what I expect this component to do 
// - It is a modal that uses the dialog html element 
// - within the element is  heading and a button 


// - The close button has an onClose handler that closes the modal I did not
// finish scaffolding this out, but would have done the following
// - add a useState
// - create a ternary based on the state value to conditionally render the component
export const Scenario = (props: Props) => {
  // there is a better way
  const dataTestId = props.dataTestId
  return (
    <>
      <dialog role="dialog" data-test-id="good-dialog">
        <h2 role="heading" data-test-id="good-heading">Header</h2>
        <button role="button" data-test-id={dataTestId}>close</button>
        Vestibulum sit amet nibh turpis.
      </dialog>
    </>

  )
}
