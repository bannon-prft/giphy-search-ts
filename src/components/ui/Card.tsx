import styles from './Card.module.css'

const Card: React.FC<{ source: string; title: string }> = (props) => {
  return (
    <li className={styles.card} data-cy="test">
      <video width="auto" height="auto" loop autoPlay muted>
        <source src={props.source} type="video/mp4" />
      </video>
      <span>{props.title}</span>
    </li>
  )
}

export default Card
