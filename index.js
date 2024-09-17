document.addEventListener('DOMContentLoaded', async () => {
    const { dockStart } = window.nlpjs;
    const dock = await dockStart();
    const nlp = dock.get('nlp');
    await nlp.train();
    document.getElementById('output').textContent = 'Training complete!';
});
