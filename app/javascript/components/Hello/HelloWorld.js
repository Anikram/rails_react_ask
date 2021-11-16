import React, {useState} from "react"
import PropTypes from "prop-types"
import styles from './index.module.scss'

function HelloWorld(props) {
  const [isActive, setIsActive] = useState()
  const clickHandler = () => {
    setIsActive(prev => !prev)
  }

  return (
    <div className={styles.tab}>
      Hello!
      {props.greeting}
      {props.anotherGreating}
      <div className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={clickHandler}>
        Push me
      </div>
    </div>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  anotherGreating: PropTypes.string
};
export default HelloWorld
