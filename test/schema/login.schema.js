export const LOGIN_SCHEMA_SUCCESS = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object",
    "default": {},
    "required": [
        "token"
    ],
    "properties": {
        "token": {
            "type": "string",
            "default": "",
        }
    },
}

export const LOGIN_SCHEMA_FAIL = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "type": "object",
    "default": {},
    "required": [
        "reason"
    ],
    "properties": {
        "reason": {
            "type": "string",
            "default": "",
        }
    },
}