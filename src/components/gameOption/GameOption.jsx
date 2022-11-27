import styles from './GameOption.module.css'
import Icon from '../icon/Icon'

function GameOption ({ status }) {
  return (
    <div className={styles.gameOption}>
      {
        status === 1 && <Icon iconName='circle' size='25px'/>
      }
      {
        status === 1 && <Icon iconName='X' size='25px'/>
      }
    </div>
  )
}

export default GameOption