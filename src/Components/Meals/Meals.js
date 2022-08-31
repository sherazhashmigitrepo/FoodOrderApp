import AvailableMeals from './AvailableMeals'
import MealSummary from './MealSummary'
import classes from './Meals.module.css'
function Meals() {
  return (
    <div className={classes.meals}>
      <MealSummary />
      <AvailableMeals />
    </div>
  )
}

export default Meals