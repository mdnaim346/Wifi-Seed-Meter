/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

class SpeedMeterDashboard extends Component {
    static template = "speed_meter.SpeedMeterDashboard";

    setup() {
        this.state = useState({
            speed: 72,
            maxSpeed: 180,
        });
    }

    increaseSpeed() {
        this.state.speed = Math.min(this.state.speed + 10, this.state.maxSpeed);
    }

    decreaseSpeed() {
        this.state.speed = Math.max(this.state.speed - 10, 0);
    }

    get rotation() {
        const minRotation = -120;
        const maxRotation = 120;
        return minRotation + (this.state.speed / this.state.maxSpeed) * (maxRotation - minRotation);
    }
}

registry.category("actions").add("speed_meter_dashboard", SpeedMeterDashboard);
