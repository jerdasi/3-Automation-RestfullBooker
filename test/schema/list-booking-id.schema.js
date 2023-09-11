export const LIST_BOOKING_ID_SCHEMA = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "array",
    "default": [],
    "items": {
        "type": "object",
        "required": [
            "bookingid"
        ],
        "properties": {
            "bookingid": {
                "type": "integer",
            }
        },
    },
}