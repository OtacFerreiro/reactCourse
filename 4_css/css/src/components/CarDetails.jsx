import styles from './CarDetails.module.css'

const CarDetails = ({car}) => {
    return (
      <div class={styles['card_carDetails']}>
          <p class={styles['p_carDetails']}>
            <label class={styles['label_carDetails']}> 
              Nome:
            </label> {car.name}
          </p>
          <p class={styles['p_carDetails']}>
            <label class={styles['label_carDetails']}> 
              Marca:
            </label> {car.label}
          </p>
      </div>
    )
}

export default CarDetails