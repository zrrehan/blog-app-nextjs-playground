async function AboutPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("OOPS!");
    return (
        <div>
            <h1>This is about page component</h1>
        </div>
    )
}

export default AboutPage;