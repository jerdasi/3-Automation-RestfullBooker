import chai, { assert, expect } from "chai";
import BookerApi from "$test/page/booker.api.js";
import * as dataUser from "$test/data/user.data.js";
import * as dataBooking from "$test/data/booking.data.js";
import * as schema from "$test/schema/booking.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Delete Booking Test", () => {
    let idBooking;
    let token;

    before(async () => {
        const response = await BookerApi.login(dataUser.VALID_USER);
        token = response.data.token
    })

    beforeEach(async () => {
        const response = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
        idBooking = response.data.bookingid;
    })

    it("Should success delete booking", async () => {
        const response = await BookerApi.deleteBooking(idBooking, token);

        assert.equal(response.status, 201);
    })

    it("Should error delete booking when token is not valid/given", async () => {
        const response = await BookerApi.deleteBooking(idBooking, "");

        assert.equal(response.status, 403);
    })

    it("Should error delete booking when id booking is not found", async () => {
        const response = await BookerApi.deleteBooking(99999999999999, token);

        assert.equal(response.status, 405);
    })
})