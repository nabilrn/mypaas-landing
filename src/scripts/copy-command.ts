type CopyState = "idle" | "copied" | "failed";

const copyText = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to execCommand for older / restricted contexts.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("copy failed");
};

const bindCopyCommand = (box: HTMLElement) => {
  if (box.dataset.copyReady === "true") return;
  box.dataset.copyReady = "true";

  const root = box.closest<HTMLElement>("[data-copy-command-root]");
  const button = box.querySelector<HTMLButtonElement>("[data-copy-button]");
  const label = box.querySelector<HTMLElement>("[data-copy-label]");
  const feedback = box.querySelector<HTMLElement>("[data-copy-feedback]");
  const toast = root?.querySelector<HTMLElement>("[data-copy-toast]");
  const toastText = toast?.querySelector<HTMLElement>("[data-copy-toast-text]");
  let resetTimer: number | undefined;
  let hideTimer: number | undefined;

  const setState = (state: CopyState, message: string) => {
    if (!button) return;
    button.dataset.copyState = state;
    button.setAttribute("aria-label", message);
    if (label) label.textContent = message;
    if (feedback) feedback.textContent = state === "idle" ? "" : message;
  };

  const showToast = (state: Exclude<CopyState, "idle">, message: string) => {
    if (!toast) return;
    window.clearTimeout(hideTimer);
    toast.hidden = false;
    toast.dataset.kind = state;
    if (toastText) toastText.textContent = message;
    requestAnimationFrame(() => {
      toast.dataset.visible = "true";
    });
  };

  const hideToast = () => {
    if (!toast) return;
    toast.dataset.visible = "false";
    hideTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 180);
  };

  const reset = () => {
    const defaultLabel = box.dataset.copyDefault || "Copy";
    setState("idle", defaultLabel);
    hideToast();
  };

  button?.addEventListener("click", async () => {
    window.clearTimeout(resetTimer);
    const command = box.dataset.command ?? "";

    try {
      await copyText(command);
      const success = box.dataset.copySuccess || "Command copied";
      setState("copied", success);
      showToast("copied", success);
      resetTimer = window.setTimeout(reset, 1650);
    } catch {
      const failed = box.dataset.copyFailed || "Copy failed";
      setState("failed", failed);
      showToast("failed", failed);
      resetTimer = window.setTimeout(reset, 2200);
    }
  });
};

const bindAll = () => {
  document.querySelectorAll<HTMLElement>("[data-command-box]").forEach(bindCopyCommand);
};

bindAll();
document.addEventListener("astro:page-load", bindAll);
