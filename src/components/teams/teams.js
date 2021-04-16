import React from "react"
import firebase from "firebase"
import { useLocation } from "react-router";
import { useStore } from "../teamCreator/teamCreator.js"

function TeamsPage(props) {
    const state = useStore()
    const location = useLocation()
    const dbData = location.state
    console.log(dbData)
    // let dataArray = []
    // let teamsArray = []
    // for (const team in data) {
    //     dataArray.push(data[team])
    //     teamsArray.push([])
    // }
    // for (let i = 0; i < dataArray.length; i++) {
    //     for (let player in dataArray[i]) {
    //         teamsArray[i].push(dataArray[i][player])
    //     }
    //     console.log(teamsArray)
    // }

    return (
        <div>teams</div>
    )
}

export default TeamsPage