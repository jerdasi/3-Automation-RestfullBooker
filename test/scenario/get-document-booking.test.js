import chai, { assert, expect } from "chai";
import BookerApi from "$test/page/booker.api.js";
import * as dataUser from "$test/data/user.data.js";
import * as dataBooking from "$test/data/booking.data.js";
import * as schema from "$test/schema/booking.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Get Document Booking Test", () => {
    let idBooking;
    let token;

    before(async () => {
        const responseLogin = await BookerApi.login(dataUser.VALID_USER);
        token = responseLogin.data.token;

        const responseCreate = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
        idBooking = responseCreate.data.bookingid;
    })


    it("Should success when Id Booking given is valid", async () => {
        const response = await BookerApi.getDocumentBooking(idBooking);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.BOOKING_SCHEMA)
    })

    it("Should error when Id Booking given is not valid", async () => {
        const response = await BookerApi.getDocumentBooking("s");

        assert.equal(response.status, 404);
    })

    after(async () => {
        const response = await BookerApi.deleteBooking(idBooking, token);
    });
});