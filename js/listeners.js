// game UI

document.getElementById("startButton").addEventListener("click", () => {
  audio.backgroundMusic.play();
  audio.start.play();
  document.querySelector(".ui").style.display = "none";
  init();
  animate();
  document.querySelector(".liveScore").style.display = "block";
  gameStarted = true;
});

document.getElementById("restartButton").addEventListener("click", () => {
  audio.select.play();
  document.querySelector(".restartScreen").style.display = "none";
  init();
  animate();
  gameStarted = true;
});

// game control events
addEventListener("keydown", (e) => {
  if (game.over) return;
  switch (e.key) {
    case "a":
      keys.a.pressed = true;
      break;
    case "d":
      keys.d.pressed = true;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case " ":
      keys.space.pressed = true;
      if (e.key === " " && e.repeat) {
        return;
      }
      if (player.powerUp === "MachineGun") return;
      if (keys.space.pressed) {
        audio.shoot.play();
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + player.width / 2,
              y: player.position.y,
            },
            velocity: {
              x: 0,
              y: -10,
            },
          })
        );
      }
      if (
    (keys.space.pressed && player.powerUp === "MultiShot")
    ) {
    audio.shoot.play();
    
    projectiles.push(
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: {
          x: -3,
          y: -10,
        }
      }),
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: {
          x: 3,
          y: -10,
        }
      })
    );
}

      break;
  }
});

addEventListener("keyup", ({ key }) => {
  if (game.over) return;
  switch (key) {
    case "a":
      keys.a.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;

      break;
  }
});

addEventListener("mousedown", () => {
  if (game.over) return;
  keys.mouse.pressed = true;
  if (player.powerUp === "MachineGun") return;
  if (gameStarted) {
    audio.shoot.play();
  }
  projectiles.push(
    new Projectile({
      position: {
        x: player.position.x + player.width / 2,
        y: player.position.y,
      },
      velocity: {
        x: 0,
        y: -10,
      },
    })
  );
  if (
    (keys.mouse.pressed && player.powerUp === "MultiShot")
    ) {
    audio.shoot.play();
    
    projectiles.push(
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: {
          x: -3,
          y: -10,
        }
      }),
      new Projectile({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y,
        },
        velocity: {
          x: 3,
          y: -10,
        }
      })
    );
}
});

addEventListener("mouseup", () => {
  if (game.over) return;
  keys.mouse.pressed = false;
});

// sound mute

document.querySelector(".sound__on").addEventListener("click", () => {
  document.querySelector(".sound__off").style.display = "block";
  document.querySelector(".sound__on").style.display = "none";
  Howler.volume(0);
});

document.querySelector(".sound__off").addEventListener("click", () => {
  document.querySelector(".sound__on").style.display = "block";
  document.querySelector(".sound__off").style.display = "none";
  Howler.volume(0.3);
});
