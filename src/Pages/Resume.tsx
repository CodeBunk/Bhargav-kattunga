import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-7xl mx-auto p-8 text-gray-900 font-sans">
            {/* Header */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Ambati Anantha Siva Srinivasa Reddy</h1>
                <p className="mt-2">React Developer | Hyderabad, India | +91 9032594344 | asreddy5270@gmail.com</p>
                <p>
                    <a href="https://ambatisrinivas.in" className="text-blue-600">Portfolio</a> |{' '}
                    <a href="https://www.linkedin.com/in/ananthasivasrinivasareddyambati" className="text-blue-600">LinkedIn</a>
                </p>
            </header>

            {/* Summary */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Summary</h2>
                <p className="mt-2">
                    Product-focused React Developer with 2.5+ years of experience building fast, scalable, and accessible UIs.
                    Proven track record of shipping end-to-end features in lean startup environments. Specializes in React, Next.js, TypeScript, and Tailwind CSS.
                    Experienced in crafting atomic design systems, optimizing performance, and aligning tech execution with product vision.
                </p>
            </section>

            {/* Impact Snapshot */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Impact Snapshot</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li> Improved load time from 3s to 0.75s on JS EduPro (75% performance gain)</li>
                    <li> Saved ~5+ dev hours/week by automating CI/CD pipelines with GitHub Actions</li>
                    <li> Delivered 10+ production-grade apps across SaaS, AR, education, and CRM</li>
                </ul>
            </section>

            {/* Skills */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Tech Stack</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Languages:</strong> TypeScript, JavaScript, HTML, CSS</li>
                    <li><strong>Frameworks:</strong> React.js, Next.js, Redux</li>
                    <li><strong>Styling/UI:</strong> Tailwind CSS, ShadCN UI, Atomic Design Systems</li>
                    <li><strong>APIs & Data:</strong> GraphQL, REST, MongoDB</li>
                    <li><strong>DevOps:</strong> GitHub Actions, CI/CD, Vercel, AWS</li>
                    <li><strong>Analytics:</strong> Google Analytics</li>
                    <li><strong>Tools:</strong> Figma, Jira, PDM Pro</li>
                </ul>
            </section>

            {/* Experience */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Experience</h2>

                {/* Freelance comes first now */}
                <div className="mt-3">
                    <h3 className="font-bold">Freelance React Developer</h3>
                    <p className="text-sm italic">Oct 2024 – Present</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Engineered full-stack UIs from scratch for startups in AR, commerce, and SaaS</li>
                        <li>Architected frontend systems: routing, state management, and file structures</li>
                        <li>Created reusable, brand-aligned design libraries using ShadCN UI and Tailwind CSS</li>
                        <li>Interfaced directly with stakeholders to transform product needs into scalable features</li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h3 className="font-bold">Frontend Engineer – Leafcraft Pvt Ltd</h3>
                    <p className="text-sm italic">Oct 2022 – Oct 2024</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                        <li>Led end-to-end frontend delivery for 5+ client platforms using React/Next.js</li>
                        <li>Developed scalable design systems using Atomic Design principles</li>
                        <li>Integrated Google Analytics to guide iterative design enhancements</li>
                        <li>Optimized JS EduPro’s load time (3s → 0.75s) through lazy loading and code splitting</li>
                        <li>Streamlined CI/CD with GitHub Actions, improving deployment efficiency across teams</li>
                        <li>Collaborated in a 4-member agile team with bi-weekly delivery cycles and Jira workflows</li>
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Highlighted Projects</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong><a href="https://leafcraft.ai/" className="text-blue-600">LeafCraft</a>:</strong> Modular React product studio site with GSAP animations</li>
                    <li><strong><a href="https://alpha-code.leafcraft.co/" className="text-blue-600">LeafCode</a>:</strong> AI platform for auto-generating project scaffolds and pushing to GitHub</li>
                    <li><strong>Flytta CRM:</strong> Logistics CRM with full-cycle CMS from lead intake to delivery resolution</li>
                    <li><strong>Moozup Admin:</strong> Customizable dashboard for managing event-based communities</li>
                    <li><strong><a href="https://trinityxr.in/" className="text-blue-600">Trinity XR</a>:</strong> VR/AR company site featuring responsive, immersive 3D interfaces</li>
                    <li><strong><a href="https://jsedupro.in/" className="text-blue-600">JS EduPro</a>:</strong> Performance-focused LMS with CI/CD, GSAP, and load-time cut by 75%</li>
                    <li><strong><a href="https://unitsdb.com/" className="text-blue-600">UnitsDB</a>:</strong> No-code backend builder with Apache Superset integration for analytics</li>
                </ul>
                <p className="mt-2 text-sm italic">
                    More live projects at: <a href="https://ambatisrinivas.in" className="text-blue-600">ambatisrinivas.in</a>
                </p>
            </section>

            {/* Collaboration */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold border-b pb-1">Team & Workflow</h2>
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Contributed in agile squads (PM, designer, backend, QA) using Jira workflows</li>
                    <li>Led 2 stakeholder syncs per week: sprint reviews and feedback-driven iteration</li>
                </ul>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
                <p className="mt-2"><strong>B.Tech in Mechatronics</strong> – MGIT, Gandipet</p>
                <p className="text-sm">2017 – 2021 | CGPA: 7.34</p>
            </section>
        </div>
    );
};

export default Resume;
