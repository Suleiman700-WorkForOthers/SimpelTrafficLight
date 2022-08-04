import traffic_light from './traffic_light.js'
const traffic = new traffic_light()

// Time is ms to show the green light
const time_to_show_green_light = 2000

const green_light_shown_for = 2000

// Start button
const btn = document.getElementById('traffic_button')

// Initialize
const init = () => {
    // Show red traffic light
    traffic.show_red()
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

    traffic.show_orange()

    setTimeout(() => {
        traffic.show_green()

        setTimeout(() => {
            traffic.flash_green().then(async () => {
                // Show orange traffic light
                traffic.show_orange()

                setTimeout(() => {
                    // Show red traffic light
                    traffic.show_red()

                    // Enable button
                    enable_btn(true)
                }, 2000)

            })
        }, green_light_shown_for)

    }, time_to_show_green_light)
})


init()
