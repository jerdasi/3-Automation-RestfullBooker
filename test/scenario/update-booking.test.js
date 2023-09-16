import chai, { assert, expect } from "chai";
import BookerApi from "$test/page/booker.api.js";
import * as dataUser from "$test/data/user.data.js";
import * as dataBooking from "$test/data/booking.data.js";
import * as schema from "$test/schema/booking.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Update Booking Test", () => {
    let idBooking;
    let token;

    before(async () => {
        const responseLogin = await BookerApi.login(dataUser.VALID_USER);
        token = responseLogin.data.token;

        const responseCreate = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
        idBooking = responseCreate.data.bookingid;
    })


    it("Should success update when Id Booking and data is valid", async () => {
        console.log(idBooking, token)
        const response = await BookerApi.updateBooking(idBooking, dataBooking.VALID_BOOKING_DATA_UPDATE, token);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.BOOKING_SCHEMA)
    })

    it("Should error update when Id not found", async () => {
        const response = await BookerApi.updateBooking(0, dataBooking.VALID_BOOKING_DATA_UPDATE, token);

        assert.equal(response.status, 404);
    })

    it("Should error update when data is not valid", async () => {
        const response = await BookerApi.updateBooking(idBooking, dataBooking.INVALID_BOOKING_DATA, token);

        assert.equal(response.status, 404);
    })

    after(async () => {
        await BookerApi.deleteBooking(idBooking, token);
    });
});