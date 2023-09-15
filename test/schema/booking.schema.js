export const CREATE_BOOKING_SUCCESS_SCHEMA = {

    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object",
    "default": {},
    "required": [
        "bookingid",
        "booking"
    ],
    "properties": {
        "bookingid": {
            "type": "integer",
            "default": 0,
        },
        "booking": {
            "type": "object",
            "default": {},
            "required": [
                "firstname",
                "lastname",
                "totalprice",
                "depositpaid",
                "bookingdates",
                "additionalneeds"
            ],
            "properties": {
                "firstname": {
                    "type": "string",
                    "default": "",
                },
                "lastname": {
                    "type": "string",
                    "default": "",
                },
                "totalprice": {
                    "type": "integer",
                    "default": 0,
                },
                "depositpaid": {
                    "type": "boolean",
                    "default": false,
                },
                "bookingdates": {
                    "type": "object",
                    "default": {},
                    "required": [
                        "checkin",
                        "checkout"
                    ],
                    "properties": {
                        "checkin": {
                            "type": "string",
                            "default": "",
                        },
                        "checkout": {
                            "type": "string",
                            "default": "",
                        }
                    },
                },
                "additionalneeds": {
                    "type": "string",
                    "default": "",
                }
            },
        }
    },
}

export const BOOKING_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object",
    "default": {},
    "required": [
        "firstname",
        "lastname",
        "totalprice",
        "depositpaid",
        "bookingdates",
        "additionalneeds"
    ],
    "properties": {
        "firstname": {
            "type": "string",
            "default": "",
        },
        "lastname": {
            "type": "string",
            "default": "",
        },
        "totalprice": {
            "type": "integer",
            "default": 0,
        },
        "depositpaid": {
            "type": "boolean",
            "default": false,
        },
        "bookingdates": {
            "type": "object",
            "default": {},
            "required": [
                "checkin",
                "checkout"
            ],
            "properties": {
                "checkin": {
                    "type": "string",
                    "default": "",
                },
                "checkout": {
                    "type": "string",
                    "default": "",
                }
            },
        },
        "additionalneeds": {
            "type": "string",
            "default": "",
        }
    },
}