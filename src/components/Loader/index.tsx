interface IProps {
  className: string
}

export const Loader = ({className}: IProps) => (
  <div className={className}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)
