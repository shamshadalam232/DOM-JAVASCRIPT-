const clock = document.querySelector(".clock")

const showTime = () => {
    setInterval(() => {
        const clocks  = new Date()        
        const localTime = clocks.toLocaleTimeString()

        clock.innerHTML = localTime
    },1000)

}

showTime()