//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async () => {
      const text = document.getElementById('text').value;
      const delay = document.getElementById('delay').valueAsNumber;

      await displayMessage(text, delay);
    });

    async function displayMessage(text, delay) {
      await new Promise(resolve => setTimeout(resolve, delay));
      document.getElementById('output').innerText = text;
    }