import React from "react"
import PropTypes from "prop-types"
import styles from './index.module.scss'

function HelloWorld(props) {
  return (
    <div className={styles.tab}>
      Hello!
      {props.greeting}
      {props.anotherGreating}
    </div>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  anotherGreating: PropTypes.string
};
export default HelloWorld
