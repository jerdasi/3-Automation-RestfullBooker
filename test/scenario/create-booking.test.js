import chai, { assert, expect } from "chai";
import BookerApi from "$test/page/booker.api.js";
import * as dataUser from "$test/data/user.data.js";
import * as dataBooking from "$test/data/booking.data.js";
import * as schema from "$test/schema/booking.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Create Booking Test", () => {
    let idBooking;
    let token;

    before(async () => {
        const response = await BookerApi.login(dataUser.VALID_USER);
        token = response.data.token
    })

    it("Should success create booking when input complete data", async () => {
        const response = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
        idBooking = response.data.bookingid;

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.CREATE_BOOKING_SUCCESS_SCHEMA);
    })

    it("Should error create booking when input not complete data", async () => {
        const response = await BookerApi.createBooking(dataBooking.PARTIAL_BOOKING_DATA);
        idBooking = response.data.bookingid;

        assert.equal(response.status, 500);
    })

    it("Should sucess create booking when input complete data even though wrong type/format", async () => {
        const response = await BookerApi.createBooking(dataBooking.INVALID_BOOKING_DATA);
        idBooking = response.data.bookingid;

        assert.equal(response.status, 200);
    })

    afterEach(async () => {
        if (idBooking) {
            const responseDelete = await BookerApi.deleteBooking(idBooking, token);
            console.log(responseDelete.status);
        }
    })
})