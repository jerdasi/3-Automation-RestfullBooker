import chai, {assert, expect} from "chai";
import BookerApi from "$test/page/booker.api.js";
import * as dataUser from "$test/data/user.data.js";
import * as dataBooking from "$test/data/booking.data.js";
import * as schema from "$test/schema/booking.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Update Partial Booking Test", () => {
    let idBooking;
    let token;

    before(async () => {
        const responseLogin = await BookerApi.login(dataUser.VALID_USER);
        token = responseLogin.data.token;

        const responseCreate = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
        idBooking = responseCreate.data.bookingid;
    })


    it("Should success partial update when Id Booking and data is valid", async () => {
        const response = await BookerApi.partialUpdateBooking(idBooking, dataBooking.PARTIAL_BOOKING_DATA, token);

        assert.equal(response.status, 200);
        assert.equal(response.data.firstname, dataBooking.PARTIAL_BOOKING_DATA.firstname);
        assert.equal(response.data.lastname, dataBooking.PARTIAL_BOOKING_DATA.lastname)
        expect(response.data).to.be.jsonSchema(schema.BOOKING_SCHEMA)
    })

    it("Should error partial update when Id Booking is not valid", async () => {
        const response = await BookerApi.partialUpdateBooking("s", dataBooking.PARTIAL_BOOKING_DATA, token);

        assert.equal(response.status, 405);
    })

    it("Should succes partial update when data is not valid and updated without same with expected schema", async () => {
        const response = await BookerApi.partialUpdateBooking(idBooking, { totalprice: "s" }, token);

        assert.equal(response.data.totalprice, null);
        assert.equal(response.status, 200);
        expect(response.data).to.be.not.jsonSchema(schema.BOOKING_SCHEMA)
    })

    after(async () => {
        await BookerApi.deleteBooking(idBooking, token);
    });
});