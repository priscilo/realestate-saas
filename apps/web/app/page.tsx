"use client"

import { useState } from "react";

export default function Home() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function createLead() {

        await fetch("http://localhost:3001/leads", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        alert("Lead creado 🚀");
    }

    return (
        <main style={{ padding: 40 }}>
            <h1>SaaS Inmobiliario</h1>

            <input
                placeholder="Nombre"
                onChange={e => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
            />

            <button onClick={createLead}>
                Crear Lead
            </button>
        </main>
    );
}