/** @odoo-module **/

import { Component, useState, onMounted, onWillUnmount } from "@odoo/owl";
import { registry } from "@web/core/registry";

export class WiFiSpeedMeter extends Component {
    static template = "speed_meter.SpeedMeterDashboard";

    setup() {
        this.state = useState({
            speed: 0,
            ping: 12,
            upload: 0,
            jitter: 2,
            isRunning: true,
        });

        this.timer = null;

        onMounted(() => {
            this.startSimulation();
        });

        onWillUnmount(() => {
            clearInterval(this.timer);
        });
    }

    startSimulation() {
        this.timer = setInterval(() => {
            if (this.state.isRunning) {
                // Simulate realistic WiFi fluctuation
                const fluctuation = Math.floor(Math.random() * 15) - 7;
                let newSpeed = this.state.speed + fluctuation;
                
                // Keep speed within gauge bounds (0-180)
                this.state.speed = Math.max(40, Math.min(175, newSpeed));
                
                // Update secondary metrics
                this.state.ping = Math.floor(Math.random() * 5) + 10;
                this.state.upload = (this.state.speed * 0.7).toFixed(1);
                this.state.jitter = Math.floor(Math.random() * 3) + 1;
            }
        }, 1000); // Update every second for real-time feel
    }

    toggleTest() {
        this.state.isRunning = !this.state.isRunning;
        if (!this.state.isRunning) {
            this.state.speed = 0;
            this.state.upload = 0;
        }
    }
}

registry.category("actions").add("speed_meter_dashboard", WiFiSpeedMeter);