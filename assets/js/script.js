// Time is ms to show the green light
const time_to_show_green_light = 2000

const green_light_shown_for = 2000

// Start button
const btn = document.getElementById('traffic_button')

const red = 'red_light'
const orange = 'orange_light'
const green = 'green_light'

// Initialize
const init = () => {
    // Show red traffic light
    show_red()
}

/**
 * Enable or disable button
 * @param _option {Boolean}
 */
const enable_btn = (_option) => {
    if (_option) {
        // Enable button
        btn.removeAttribute('disabled')

        // Change button text
        btn.innerText = 'Start Traffic Light'
    }
    else {
        // Disable button
        btn.setAttribute('disabled', 'disabled')

        // Change button text
        btn.innerText = 'Started'
    }
}


btn.addEventListener('click', (e) => {
    // Disable button
    enable_btn(false)

    show_orange()

    setTimeout(() => {
        show_green()

        setTimeout(() => {
            flash_green().then(async () => {
                // Show orange traffic light
                show_orange()

                setTimeout(() => {
                    // Show red traffic light
                    show_red()

                    // Enable button
                    enable_btn(true)
                }, 2000)

            })
        }, green_light_shown_for)

    }, time_to_show_green_light)
})



// Reset all traffic lights
const reset_traffic_light = () => {
    document.getElementById(red).style.backgroundColor = 'gray'
    document.getElementById(orange).style.backgroundColor = 'gray'
    document.getElementById(green).style.backgroundColor = 'gray'
}

// Show red traffic light
const show_red = () => {
    // Reset all traffic lights
    reset_traffic_light()

    // Show red traffic light
    document.getElementById(red).style.backgroundColor = 'red'

    set_bg_color('red')
}

// Show orange traffic light
const show_orange = () => {
    // Show orange traffic light
    document.getElementById(orange).style.backgroundColor = 'orange'

    set_bg_color('orange')
}

// Show green traffic light
const show_green = () => {
    // Reset all traffic lights
    reset_traffic_light()

    // Show green traffic light
    document.getElementById(green).style.backgroundColor = 'green'
    set_bg_color('green')
}

/**
 * Set background color
 * @param _color {String}
 */
const set_bg_color = (_color) => {
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

const sleep = m => new Promise(r => setTimeout(r, m))

const flash_green = async () => {
    // Flash green light
    for (let i = 0; i < 4; i++) {
        await (async () => {
            await sleep(400)
            document.getElementById(green).style.backgroundColor = 'gray'
            set_bg_color('gray')
            await sleep(400)
            document.getElementById(green).style.backgroundColor = 'green'
            set_bg_color('green')
        })()
    }
    document.getElementById(green).style.backgroundColor = 'gray'
    set_bg_color('gray')
}

init()
