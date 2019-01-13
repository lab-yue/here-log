const now = () => new Date().toISOString()
    .split(".")[0]
    .replace("T", " ");

const createLogger = (emoji: any) => (msg: any = "") =>
    console.log(
        `  ${now()} --- ${emoji}  ${msg}`,
    );

const cat = createLogger("🐈");
const work = createLogger("💦");
const ok = createLogger("✅");
const done = createLogger("✨");
const error = createLogger("❌ ");

export default {
    cat,
    work,
    ok,
    done,
    error,
    createLogger,
};
