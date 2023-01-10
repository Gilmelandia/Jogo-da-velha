import styles from './Score.module.css'

import icon from '../icon/Icon'
import Icon from '../icon/Icon'

function Score ({ scoreX, scoreCircle}) {
  return (
    <> 
     <h4>Placar</h4>
     <div className={styles.score}>
      <divc className={styles.scoreContent}>
        <Icon iconName='circle' />
        <h2>{scoreCircle}</h2>
      </divc>
      <div className={styles.scoreContent}>
        <Icon iconName='x' />
        <h2>{scoreX}</h2>
      </div>
     </div>
  </>
  )
}

export default Score