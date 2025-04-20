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
// - The close button has an onClose handler that closes the modal by changing the X value when clicked or escape is used is clicked. It also uses a data test id to support rendering .
export const Scenario = (props: Props) => {
  // there is a better way
  const dataTestId = props.dataTestId
  return (
    <>
      <dialog role="dialog" data-test-id="good-dialog">
        <h2 role="heading" data-test-id="good-heading">close</h2>
        <button role="button" data-test-id={dataTestId}>close</button>

      </dialog>
    </>

  )
}
