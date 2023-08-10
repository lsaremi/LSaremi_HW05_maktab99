const notificationBoxHTML = `
  <div class="notificationBox">
    <p class="message"></p>
    <div class="close">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 1L8 8M8 8L1 15M8 8L1 1M8 8L15 15"
          stroke="#084108"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
`;

const tempElement = document.createElement("div");
tempElement.innerHTML = notificationBoxHTML;

const notificationBox = tempElement.querySelector(".notificationBox");
document.body.appendChild(notificationBox);

const messageElement = notificationBox.querySelector(".message");
const btn = document.querySelector(".notificationBtn");

function showNotification(message, position, className) {
  notificationBox.style.top = position.top + "px";
  notificationBox.style.right = position.right + "px";

  notificationBox.classList.add(className);
  messageElement.textContent = message;
  notificationBox.style.display = "flex";
}

btn.addEventListener("click", () => {
  showNotification(
    "This is the notification message!",
    { top: 50, right: 10 },
    "success"
  );
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
  notificationBox.style.display = "none";
});
