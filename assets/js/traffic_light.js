
class traffic_light {
    constructor() {
        this.red = 'red_light'
        this.orange = 'orange_light'
        this.green = 'green_light'
    }

    // Reset all traffic lights
    reset_traffic_light() {
        document.getElementById(this.red).style.backgroundColor = 'gray'
        document.getElementById(this.orange).style.backgroundColor = 'gray'
        document.getElementById(this.green).style.backgroundColor = 'gray'
    }

    // Show red traffic light
    show_red() {
        // Reset all traffic lights
        this.reset_traffic_light()

        // Show red traffic light
        document.getElementById(this.red).style.backgroundColor = 'red'
    }

    // Show orange traffic light
    show_orange() {
        // // Reset all traffic lights
        // this.reset_traffic_light()

        // Show red traffic light
        // this.show_red()

        // Show orange traffic light
        document.getElementById(this.orange).style.backgroundColor = 'orange'
    }

    // Show green traffic light
    show_green() {
        // Reset all traffic lights
        this.reset_traffic_light()

        // Show green traffic light
        document.getElementById(this.green).style.backgroundColor = 'green'
    }


    // timeout(ms) {
    //     return new Promise(resolve => setTimeout(() => {
    //         return true
    //     }))
    // }

    sleep = m => new Promise(r => setTimeout(r, m))

    async flash_green() {
        // Flash green light
        for (let i = 0; i < 4; i++) {
            await (async () => {
                await this.sleep(400)
                document.getElementById(this.green).style.backgroundColor = 'gray'
                await this.sleep(400)
                document.getElementById(this.green).style.backgroundColor = 'green'
            })()
        }
        document.getElementById(this.green).style.backgroundColor = 'gray'
    }
}

export default traffic_light
