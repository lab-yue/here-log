import here from '../src';

let count = 1;
const idea = here.createLogger("💡");
const partyPopper = here.createLogger("🎉");

here.error("NOT FINISHED");
Array(5).fill("").map(i => {
    here.work(`TASK ${count++}`);
    idea("SOME IDEAS? ");
})
partyPopper("Eureka!");
here.done("DONE");
here.ok("END");