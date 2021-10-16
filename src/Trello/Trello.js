import React, {useState} from 'react'
import {Header} from "./Header"
import {TopComp} from "./TopComp"
import {SecondComponent} from "./SecondComponent"
import {ThirdComponent} from "./ThirdComponent"
// import {FourthComponent} from "./FourthComponent/FourthComponent"
import {FourthBuild} from "./FourthComponent/FourthBuild"
import { FifthComponent } from "./FifthComponent"
import { SliderComponent } from "./Slider/SliderComponent"
import {ContactComponent} from "./ContactComponent"
import {FooterComponent} from './FooterComponent'


const Trello = () => {

    const [toggle, setToggle] = useState(false);

    const onHandle = () => {
        const check = window.scrollY
        console.log(check)
        if (check>=70){
            setToggle(true)
        } else{
            setToggle(false)
        }
    }

    window.addEventListener("scroll", onHandle)

    return (
        <div>
            <Header bg={toggle ? "bg" : ""}/>
            <TopComp />
            <SecondComponent />
            <ThirdComponent />
            <FourthBuild />
            <FifthComponent />
            <SliderComponent />
            <ContactComponent />
            <FooterComponent />
        </div>
    )
}

export default Trello
