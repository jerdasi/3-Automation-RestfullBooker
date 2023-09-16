export const VALID_BOOKING_DATA = {
    "firstname" : "Teofilus",
    "lastname" : "Daniel Silitonga",
    "totalprice" : 1000000,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2023-09-12",
        "checkout" : "2023-09-20"
    },
    "additionalneeds" : "Breakfast"
}

export const INVALID_BOOKING_DATA = {
    "firstname" : "Teofilus",
    "lastname" : "Daniel Silitonga",
    "totalprice" : "s",
    "depositpaid" : 1,
    "bookingdates" : {
        "checkin" : "s",
        "checkout" : "s"
    },
    "additionalneeds" : 1
}

export const VALID_BOOKING_DATA_UPDATE = {
    "firstname" : "Wakjon",
    "lastname" : "Azura",
    "totalprice" : 1000,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2023-12-25",
        "checkout" : "2023-12-26"
    },
    "additionalneeds" : "Chocolate Drink"
}

export const PARTIAL_BOOKING_DATA = {
    "firstname" : "Balala",
    "lastname" : "Calala",
}

export const VALID_PARAMS = {
    "firstname" : "Teofilus",
    "lastname" : "Daniel Silitonga",
    "checkin" : "2023-09-11",
    "checkout" : "2023-09-21"
}

export const INVALID_PARAMS = {
    "firstname" : "Teofilus",
    "lastname" : "Daniel Silitonga",
    "checkin" : "s",
    "checkout" : "s"
}