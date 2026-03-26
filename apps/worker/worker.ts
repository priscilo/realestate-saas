import { Worker } from "bullmq";

const worker = new Worker(
    "followups",
    async job => {
        console.log("Enviar follow-up:", job.data);
    },
    {
        connection: {
            host: "localhost",
            port: 6379
        }
    }
);

console.log("Worker activo 🚀");