// Enable fullscreen mode by default.
const fullscreenButtonObserver = new MutationObserver(mutations => {
  if (!document.querySelector('fullscreen-button')) {
    return;
  }
  fullscreenButtonObserver.disconnect();

  const fullscreenIcon = document.querySelector('fullscreen-button mat-icon');
  // innerText is 'fullscreen' when not in fullscreen mode
  const isFullscreen = fullscreenIcon.innerText === 'fullscreen_exit';

  if (isFullscreen) {
    return;
  }

  document.querySelector('fullscreen-button button').click();
});

fullscreenButtonObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

// Resize the cross reference panel so that the references and the code preview
// have equal width.
const codeContainerObserver = new MutationObserver(mutations => {
  if (!document.querySelector('.code-container')) {
    return;
  }
  codeContainerObserver.disconnect();

  const codeContainer = document.querySelector('.code-container');
  const width = codeContainer.parentElement.offsetWidth / 2;
  codeContainer.style = `width: ${width}px;`;
});

codeContainerObserver.observe(document.body, {
  childList: true,
  subtree: true,
});
