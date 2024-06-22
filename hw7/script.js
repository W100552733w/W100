async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

document.getElementById('inputText').addEventListener('input', async function() {
    const inputText = this.value;
    const outputHash = document.getElementById('outputHash');

    if (inputText) {
        const hash = await sha256(inputText);
        outputHash.textContent = hash;
    } else {
        outputHash.textContent = '雜湊值會顯示在這裡...';
    }
});
