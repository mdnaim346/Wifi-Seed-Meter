# -*- coding: utf-8 -*-
{
    'name': 'Speed Meter',
    'version': '17.0.1.0.0',
    'sequence': 10,
    'summary': 'Desktop speed meter demo for Odoo backend',
    'description': """
Speed meter module with a simple desktop/backend gauge screen.
    """,
    'depends': ['web'],
    'data': [
        'security/ir.model.access.csv',
        'views/speed_meter_menu.xml',
    ],
    'installable': True,
    'application': True,
    'assets': {
        'web.assets_backend': [
            'speed_meter/static/src/scss/speed_meter.scss',
            'speed_meter/static/src/js/speed_meter.js',
            'speed_meter/static/src/xml/speed_meter.xml',
        ],
        'web.assets_frontend': [],
    },
}
