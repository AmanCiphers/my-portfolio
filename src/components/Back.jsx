import Link from "next/link";

export default function BackToLunchbox() {
    return (
        <div className="">
            <Link
                href="/"
                className="px-6 py-3 font-semibold rounded-lg shadow-md transition transform hover:scale-105"
                style={{
                    backgroundColor: "var(--bento-bg)",
                    color: "var(--accent-color)",
                }}
            >
                ⬅ Back to Lunchbox
            </Link>
        </div>
    );
}
