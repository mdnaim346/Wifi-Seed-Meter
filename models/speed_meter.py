from odoo import fields, models


class SpeedMeter(models.Model):
    _name = 'speed.meter'
    _description = 'Speed Meter'

    name = fields.Char(required=True, default='Desktop Speed Meter')
    speed = fields.Float(default=72.0)
    max_speed = fields.Float(default=180.0)
