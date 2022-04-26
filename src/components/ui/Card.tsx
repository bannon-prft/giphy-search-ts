import styles from './Card.module.css'

const Card: React.FC<{ source: string; title: string }> = (props) => {
  const clickHandler = (event: any) => {
    navigator.clipboard.writeText(props.source)
  }

  return (
    <li className={styles.card} data-cy="test">
      <video loop autoPlay muted>
        <source src={props.source} type="video/mp4" />
      </video>
      <div className={styles.metaContainer}>
        <span className={styles.title}>{props.title}</span>
        <span>
          <button className={styles.copyButton} onClick={clickHandler}>
            Copy GIPHY
          </button>
        </span>
      </div>
    </li>
  )
}

export default Card
