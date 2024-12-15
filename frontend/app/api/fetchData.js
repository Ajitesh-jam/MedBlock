export default async function handler(req, res) {
    const { url } = req.query;

    try {
        const response = await fetch(url);
        const contentType = response.headers.get("Content-Type");

        if (contentType?.includes("application/json")) {
            const data = await response.json();
            res.status(200).json({ data, contentType });
        } else {
            const data = await response.text(); // Handle non-JSON data
            res.status(200).json({ data, contentType });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data." });
    }
}
