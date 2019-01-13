import here from '../src';
import * as assert from 'assert';
import * as sinon from 'sinon';

describe("here", () => {

    describe("create new logger", () => {
        it("returns logger function", () => {
            const ghost = here.createLogger('👻');
            assert(typeof ghost, "function");
        });
    })

    describe("cat logger example", () => {
        it("logs I'm here with cat", () => {
            let spy = sinon.stub(here, 'cat');
            here.cat("I'm here");
            assert(spy.calledWithMatch("I'm here"));
            spy.restore();
        });
    })
}
);