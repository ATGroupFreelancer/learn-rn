import React from "react"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

// Model the application state.
class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increase(number) {
        this.secondsPassed += number
    }

    reset() {
        this.secondsPassed = 0
    }

    get doubleSecond() {
        return this.secondsPassed * 2;
    }
}

export const myTimer = new Timer()