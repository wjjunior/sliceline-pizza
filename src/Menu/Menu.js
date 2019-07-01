import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { Food, FoodGrid, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`

export function Menu({ setOpenFood }) {
    return <MenuStyled>
        {Object.entries(foods).map(([sectionName, foods]) => (
            <React.Fragment key={sectionName} >
                <h1> {sectionName} </h1>
                <FoodGrid>
                    {foods.map((food, index) => (
                        <Food img={food.img} key={index} onClick={() => {
                            setOpenFood(food)
                        }}>
                            <FoodLabel>
                                {food.name}
                            </FoodLabel>
                        </Food>
                    ))}
                </FoodGrid>
            </React.Fragment>
        ))}
    </MenuStyled>
}