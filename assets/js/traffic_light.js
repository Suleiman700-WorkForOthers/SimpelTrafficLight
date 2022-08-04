
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

        this.set_bg_color('red')
    }

    // Show orange traffic light
    show_orange() {
        // Show orange traffic light
        document.getElementById(this.orange).style.backgroundColor = 'orange'

        this.set_bg_color('orange')
    }

    // Show green traffic light
    show_green() {
        // Reset all traffic lights
        this.reset_traffic_light()

        // Show green traffic light
        document.getElementById(this.green).style.backgroundColor = 'green'
        this.set_bg_color('green')
    }

    /**
     * Set background color
     * @param _color {String}
     */
    set_bg_color(_color) {
        switch (_color) {
            case 'red':
                document.body.style.backgroundColor = 'rgba(255,0,0,0.3)'
                break;
            case 'orange':
                document.body.style.backgroundColor = 'rgba(255,165,0,0.3)'
                break;
            case 'green':
                document.body.style.backgroundColor = 'rgba(0,128,0,0.3)'
                break;
            case 'gray':
                document.body.style.backgroundColor = 'rgba(128,128,128,0.3)'
                break;
        }
    }


    sleep = m => new Promise(r => setTimeout(r, m))

    async flash_green() {
        // Flash green light
        for (let i = 0; i < 4; i++) {
            await (async () => {
                await this.sleep(400)
                document.getElementById(this.green).style.backgroundColor = 'gray'
                this.set_bg_color('gray')
                await this.sleep(400)
                document.getElementById(this.green).style.backgroundColor = 'green'
                this.set_bg_color('green')
            })()
        }
        document.getElementById(this.green).style.backgroundColor = 'gray'
        this.set_bg_color('gray')
    }
}

export default traffic_light
