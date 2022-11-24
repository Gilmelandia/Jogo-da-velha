import styles from './Header.module.css'

import Subtitle from "../subtitle/Subtitle"
import Title from "../title/Title"
import Icon from '../icon/Icon'

function Header () {
  return (
    <div className={styles.header}>
      <Title>Jogo da Velha</Title>
      <Subtitle>Criado por Pedro</Subtitle>
      <div className={styles.iconContent}>
        <Icon iconName='github' link='https://github.com/Gilmelandia'/>
      </div>
    </div>
  )
}

export default Header