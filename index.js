  const getApiGithHubPerfil = () => {
    const api_github = document.querySelector('.avatar-git');
    fetch('https://api.github.com/users/daniellx42')
      .then(async res => {
        if (!res.ok) {
          throw Error(res.status);
        }
        let data = await res.json();
        if (res.ok) {
          api_github.innerHTML += `<img src="${data.avatar_url}"/>`;
        }
      }).catch(err => {
        console.log(err);
      });
  }

  getApiGithHubPerfil();
