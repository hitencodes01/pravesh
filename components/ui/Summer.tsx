"use client"
import { useState } from "react"

export default function Summer() {
    const [isVisible, setIsVisible] = useState<boolean>(true)

    if (!isVisible) return null

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1000,
                    animation: "fadeIn 0.25s ease",
                }}
                onClick={() => setIsVisible(false)}
            >
                {/* Popup Card */}
                <div
                    style={{
                        position: "relative",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
                        maxWidth: "360px",
                        width: "90%",
                        animation: "slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        fontFamily: "'Georgia', serif",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Image */}
                    <div style={{ position: "relative" }}>
                        <img
                            src="/images/SummerCamp.jpeg"
                            alt="Summer Camp"
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                        {/* Gradient overlay on image */}
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(255,120,0,0.18) 100%)"
                        }} />

                        {/* Close (✕) button */}
                        <button
                            onClick={() => setIsVisible(false)}
                            title="Cancel"
                            style={{
                                position: "absolute",
                                top: "12px",
                                right: "12px",
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                border: "none",
                                backgroundColor: "rgba(255,255,255,0.85)",
                                backdropFilter: "blur(6px)",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "18px",
                                color: "#333",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                                transition: "background 0.2s, transform 0.15s",
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff"
                                    ; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.85)"
                                    ; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"
                            }}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Content area */}
                    <div style={{
                        backgroundColor: "#fff",
                        padding : "10px"
                    }}>

                        {/* Action buttons */}
                        <div style={{ display: "flex"}}>
                            {/* Cancel button */}
                            <button
                                onClick={() => setIsVisible(false)}
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: "10px",
                                    border: "1.5px solid #e5e7eb",
                                    backgroundColor: "blue",
                                    color: "#555",
                                    fontSize: "14px",
                                    fontFamily: "sans-serif",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    transition: "all 0.18s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#f9fafb"
                                        ; (e.currentTarget as HTMLButtonElement).style.borderColor = "#d1d5db"
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"
                                        ; (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb"
                                }}
                            >
                                <span style={{ fontSize: "16px" }}>✕</span> Cancel
                            </button>

                            {/* Apply button */}
                            <button
                                onClick={() => {
                                    alert("Application submitted! 🎉")
                                    setIsVisible(false)
                                }}
                                style={{
                                    flex: 1,
                                    padding: "12px",
                                    borderRadius: "10px",
                                    border: "none",
                                    background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
                                    color: "#fff",
                                    fontSize: "14px",
                                    fontFamily: "sans-serif",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    boxShadow: "0 4px 14px rgba(249,115,22,0.4)",
                                    transition: "all 0.18s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    letterSpacing: "0.3px",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"
                                        ; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 18px rgba(249,115,22,0.5)"
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"
                                        ; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 14px rgba(249,115,22,0.4)"
                                }}
                            >
                                Apply Now 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyframe animations */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
            `}</style>
        </>
    )
}