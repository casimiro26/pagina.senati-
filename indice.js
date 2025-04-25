function changeBio() {
          const newBio = prompt("Escribe tu nueva bio o ciudad:");
          if (newBio) {
            document.getElementById("bio").textContent = newBio;
          }
        }
        