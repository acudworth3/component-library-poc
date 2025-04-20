
type Props = {
  value: string
  dataTestId?: string
  onClose?: () => void
  // my linter didnt' seem to like kebab-case so I renamed this

}

export const Scenario = (props: Props) => {
  console.info(props)
  return (
    <>
      <div>Scenario </div>
    </>
  )
}
