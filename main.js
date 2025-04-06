const data_time_tracking = [
    {
        "id": "work",
        "cat": "Work",
        "style-class": "work",
        "data": {
            "daily": {
                "current": 5,
                "last_tracking": 7
            },
            "weekly": {
                "current": 32,
                "last_tracking": 36
            },
            "monthly": {
                "current": 103,
                "last_tracking": 128
            }
        }
    },
    {
        "id": "play",
        "cat": "Play",
        "style-class": "play",
        "data": {
            "daily": {
                "current": 1,
                "last_tracking": 2
            },
            "weekly": {
                "current": 10,
                "last_tracking": 8
            },
            "monthly": {
                "current": 23,
                "last_tracking": 29
            }
        }
    },
    {
        "id": "study",
        "cat": "Study",
        "style-class": "study",
        "data": {
            "daily": {
                "current": 0,
                "last_tracking": 1
            },
            "weekly": {
                "current": 4,
                "last_tracking": 7
            },
            "monthly": {
                "current": 13,
                "last_tracking": 19
            }
        }
    },
    {
        "id": "exercise",
        "cat": "Exercise",
        "style-class": "exercise",
        "data": {
            "daily": {
                "current": 1,
                "last_tracking": 1
            },
            "weekly": {
                "current": 4,
                "last_tracking": 5
            },
            "monthly": {
                "current": 11,
                "last_tracking": 18
            }
        }
    },
    {
        "id": "social",
        "cat": "Social",
        "style-class": "social",
        "data": {
            "daily": {
                "current": 1,
                "last_tracking": 3
            },
            "weekly": {
                "current": 5,
                "last_tracking": 10
            },
            "monthly": {
                "current": 21,
                "last_tracking": 23
            }
        }
    },
    {
        "id": "self-care",
        "cat": "Self Care",
        "style-class": "self-care",
        "data": {
            "daily": {
                "current": 0,
                "last_tracking": 1
            },
            "weekly": {
                "current": 2,
                "last_tracking": 2
            },
            "monthly": {
                "current": 7,
                "last_tracking": 11
            }
        }
    }
];

var active_menu = 'daily';

window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('.menu-item');
    for (let button of buttons) {
        // Active menu
        if (button.dataset.timeframe === active_menu) {
            button.classList.toggle('active')
        }
        // Set data to HTML elements
        for (let data of data_time_tracking) {
            let current = data.data[active_menu].current;
            let last_tracking = data.data[active_menu].last_tracking;
            let current_element = document.getElementById(`time_${data.id}_now`)
            let last_element = document.getElementById(`time_${data.id}_last`)
            current_element.innerHTML = current + 'hrs'
            let label_last = getLastTimeLabel(active_menu)
            last_element.innerHTML = label_last + ' - ' + last_tracking + 'hrs'
        }
        
        button.addEventListener('click', e => {
            let timeframe = e.target.dataset.timeframe;
            // remove active class from all buttons
            buttons.forEach(button => {
                button.classList.remove('active')
            })
            // add active class to clicked button
            e.target.classList.add('active')
            // update data
            for (let data of data_time_tracking) {
                let current = data.data[timeframe].current;
                let last_tracking = data.data[timeframe].last_tracking;
                let current_element = document.getElementById(`time_${data.id}_now`)
                let last_element = document.getElementById(`time_${data.id}_last`)
                current_element.innerHTML = current + 'hrs'
                let label_last = getLastTimeLabel(timeframe)
                last_element.innerHTML = label_last + ' - ' + last_tracking + 'hrs'
            }

        })
    }
})

function getLastTimeLabel(timeframe) {
    let label_last = '';
    switch (timeframe) {
        case 'daily':
            label_last = 'Yesterday';
            break;
        case 'weekly':
            label_last = 'Last Week';
            break;
        case 'monthly':
            label_last = 'Last Month';
            break;
    }
    return label_last;
}