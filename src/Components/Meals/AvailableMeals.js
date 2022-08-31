import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem'




function AvailableMeals() {
    const [meals, setMeals] = useState([])
    const [loading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState()
    useEffect(() => {


        const fetchMeal = async() => {
            const response = await fetch('https://foodorderapp-abb98-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')
            if(!response.ok){
               throw new Error( "somthing wrong")
            }
            const responseData = await response.json()
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    key: key,
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals)
            setIsLoading(false)
        }

        fetchMeal().catch(error => {
            setIsLoading(false)
            setHttpError(error.message)
        })



        // fetch('https://foodorderapp-abb98-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json').then(response => response.json()).then(reponseData => {
        //     const loadedMeals = [];
        //     for (const key in reponseData) {
        //         loadedMeals.push({
        //             key: key,
        //             id: key,
        //             name: reponseData[key].name,
        //             description: reponseData[key].description,
        //             price: reponseData[key].price
        //         })
        //     }
        //     setMeals(loadedMeals)
        //     setIsLoading(false)
        // })
    }, [])
    if(loading){
        return<p className={classes.loading}>Loading ....</p>
    }
    const mealsData = meals.map((item) => <MealItem
    id={item.id}
    key={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    />)
    if(httpError){
        return <section className={classes.error}>
            <p>{httpError}</p>
        </section>
    }
    
    return (
        <Card className={classes.meals}>
            <ul>
                {mealsData}
            </ul>
        </Card>
    )
}

export default AvailableMeals