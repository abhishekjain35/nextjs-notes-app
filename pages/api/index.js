import nc from "next-connect";

const handlers = nc()
    .get((req, res) => {
        res.json({ message: "ok" });
    })
    .post((req, res) => {
        res.json({ message: "posted" });
    });

export default handlers;
