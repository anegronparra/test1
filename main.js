document.getElementById("saveButton").addEventListener("click", async () => {
    const textInput = document.getElementById("textInput").value;

    try {
        const response = await fetch("/save-text", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: textInput })
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        document.getElementById("message").textContent = data.message;
    } catch (error) {
        console.error("Error saving text:", error);
        document.getElementById("message").textContent = "Error saving text. Please try again.";
    }
});
