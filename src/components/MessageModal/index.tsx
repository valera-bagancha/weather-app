import { FC } from 'react'
import cn from 'classnames'

interface IProps {
  message: string
  hideModal: () => void;
  isError?: boolean;
}

export const MessageModal: FC<IProps> = ({ message, hideModal, isError }) => {
  const appModalStyles = cn('modal-box', {
    ['error-message']: isError
  })

  return (
    <div className="app-modal">
    <div className={appModalStyles}>
      <div>{message}</div>
      <button className="button-modal" onClick={hideModal}>
        Ok
      </button>
    </div>
  </div>
  )
}

MessageModal.defaultProps = {
  isError: false
}
