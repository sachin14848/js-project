const API_URL = "http://localhost:3000";
const wishesEl = document.getElementById("wishes");
const statusEl = document.getElementById("status");
const formEl = document.getElementById("wish-form");

function sparklesHtml() {
    return `<div class="sparkles" aria-hidden="true">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
    </div>`;
}

function renderWish(wish) {
    if (wish.style === "classic") {
        return `<div class="row classic-wish">
            <div class="heading">${escapeHtml(wish.title)}</div>
            <p class="description">${escapeHtml(wish.description)}</p>
        </div>`;
    }

    return `<article class="modern-wish" aria-label="${escapeHtml(wish.kicker || "Modern Diwali wish")}">
        ${sparklesHtml()}
        <div class="diya" aria-hidden="true">
            <div class="flame"></div>
            <div class="bowl"></div>
        </div>
        <p class="wish-kicker">${escapeHtml(wish.kicker || "Festival of Lights")}</p>
        <h2 class="wish-title">${escapeHtml(wish.title)}</h2>
        <p class="wish-description">${escapeHtml(wish.description)}</p>
    </article>`;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

async function loadWishes() {
    try {
        const [wishesRes, greetingRes] = await Promise.all([
            fetch(`${API_URL}/api/wishes`),
            fetch(`${API_URL}/api/greeting`),
        ]);

        if (!wishesRes.ok) {
            throw new Error("Could not load wishes");
        }

        const wishes = await wishesRes.json();
        const greeting = greetingRes.ok ? await greetingRes.json() : null;

        wishesEl.innerHTML = wishes.map(renderWish).join("");
        statusEl.textContent = greeting
            ? greeting.greeting
            : "Wishes loaded from the Happy Diwali API";
        statusEl.classList.remove("error");
    } catch (error) {
        statusEl.textContent = "Could not reach the Happy Diwali API. Start the backend on port 3000.";
        statusEl.classList.add("error");
        console.error(error);
    }
}

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`${API_URL}/api/wishes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || "Could not save wish");
        }

        formEl.reset();
        formEl.elements.title.value = "Happy Diwali";
        await loadWishes();
    } catch (error) {
        statusEl.textContent = error.message;
        statusEl.classList.add("error");
    }
});

loadWishes();
