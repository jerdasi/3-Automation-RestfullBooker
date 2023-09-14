import BookerApi from "$test/page/booker.api";
import chai, {assert, expect} from "chai";
import * as data from "$test/data/booking.data.js";
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
        before(async () => {
            BookerApi.createBooking(data.VALID_BOOKING_DATA).then(result => {
                idBookingTest = result.data.bookingid
            })
        });
        it('Validate list booking show data if given valid parameter', async () => {
            return BookerApi.getCollectionBooking(data.VALID_PARAMS).then(result => {
                assert.equal(result.status, 200);
                expect(result.data).to.have.not.empty;
                expect(result.data).to.be.jsonSchema(schema.LIST_BOOKING_ID_SCHEMA);
            })
        });

        it('Validate list booking not show data if given invalid parameter', async () => {
            return BookerApi.getCollectionBooking(data.INVALID_PARAMS).then(result => {
                assert.equal(result.status, 500);
            })
        });

        after(() => {
            BookerApi.deleteBooking(idBookingTest)
        })
    })
})