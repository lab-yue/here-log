const now = () => new Date().toISOString()
    .split(".")[0]
    .replace("T", " ");

const createLogger = (emoji: string) => (msg: string = "") =>
    console.log(
        `  ${now()} --- ${emoji}  ${msg}`,
    );

const cat = createLogger("🐈");
const work = createLogger("💦");
const ok = createLogger("✅");
const done = createLogger("✨");

export default {
    cat,
    work,
    ok,
    done,
    createLogger,
};
