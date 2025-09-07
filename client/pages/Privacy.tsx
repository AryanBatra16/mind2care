export default function Privacy() {
  return (
    <main className="mx-auto max-w-5xl px-6">
      <section className="prose prose-neutral mx-auto mt-8 max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>Your privacy matters. We store minimal necessary data and use anonymous identifiers (UUID). Data is encrypted in transit and at rest.</p>
        <h2>Data we collect</h2>
        <ul>
          <li>Anonymous usage metrics</li>
          <li>Content you choose to save (journal, tasks)</li>
        </ul>
        <h2>Your choices</h2>
        <ul>
          <li>Delete entries anytime</li>
          <li>Export a copy of your data</li>
        </ul>
      </section>
    </main>
  );
}
