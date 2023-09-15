import BookerApi from "$test/page/booker.api";
import chai, {assert, expect} from "chai";
import * as dataBooking from "$test/data/booking.data.js";
import * as dataUser from "$test/data/user.data.js";
import * as schema from "$test/schema/list-booking-id.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Get Collection Booking Test", () => {
    it('Validate list booking id show when no parameter given', async () => {
        const params = {};
        return BookerApi.getCollectionBooking(params).then(result => {
            assert.equal(result.status, 200);
            expect(result.data).to.be.jsonSchema(schema.LIST_BOOKING_ID_SCHEMA);
        })
    });

    describe("Get Collection Booking Test Using Parameter", () => {
        let idBookingTest;
        let token;
        before(async () => {
            const responseLogin = await BookerApi.login(dataUser.VALID_USER);
            token = responseLogin.data.token;

            const responseCreate = await BookerApi.createBooking(dataBooking.VALID_BOOKING_DATA);
            idBookingTest = responseCreate.data.bookingid;
        });
        it('Validate list booking show data if given valid parameter', async () => {
            return BookerApi.getCollectionBooking(dataBooking.VALID_PARAMS).then(result => {
                assert.equal(result.status, 200);
                expect(result.data).to.have.not.empty;
                expect(result.data).to.be.jsonSchema(schema.LIST_BOOKING_ID_SCHEMA);
            })
        });

        it('Validate list booking not show data if given invalid parameter', async () => {
            return BookerApi.getCollectionBooking(dataBooking.INVALID_PARAMS).then(result => {
                assert.equal(result.status, 500);
            })
        });

        after(async () => {
            const response = await BookerApi.deleteBooking(idBookingTest, token);
        })
    })
})