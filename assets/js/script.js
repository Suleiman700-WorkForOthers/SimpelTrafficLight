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

btn.addEventListener('click', (e) => {
    // Disable button
    btn.setAttribute('disabled', 'disabled')

    // Change button text
    btn.innerText = 'Started'

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
                    btn.removeAttribute('disabled')

                    // Change button text
                    btn.innerText = 'Start Traffic Light'
                }, 2000)

            })
        }, green_light_shown_for)

    }, time_to_show_green_light)
})


init()
