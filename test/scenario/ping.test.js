import BookerApi from "$test/page/booker.api";
import { assert } from "chai";

describe("Ping/HealthCek Test", async () => {
    it("validate success request ping/healthcheck test", async () => {
        const response = await BookerApi.ping();
        assert.equal(response.status, 201)
    })
})