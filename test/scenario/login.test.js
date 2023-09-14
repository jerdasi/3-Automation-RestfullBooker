import BookerApi from "$test/page/booker.api";
import chai, {assert, expect} from "chai";
import * as data from "$test/data/user.data.js";
import * as schema from "$test/schema/login.schema.js";
import chaiJsonSchema from "chai-json-schema";

chai.use(chaiJsonSchema);

describe("Login Test", () => {
    it('should success login when input valid data', async () => {
        return BookerApi.login(data.VALID_USER).then(result => {
            assert.equal(result.status, 200);
            assert.isString(result.data.token);
            expect(result.data).to.be.jsonSchema(schema.LOGIN_SCHEMA_SUCCESS);
        })
    });

    it('should success fail when input invalid data', () => {
        return BookerApi.login(data.INVALID_USER).then(result => {
            assert.equal(result.status, 200);
            assert.equal(result.data.reason, "Bad credentials");
            expect(result.data).to.be.jsonSchema(schema.LOGIN_SCHEMA_FAIL);
        })
    });
})