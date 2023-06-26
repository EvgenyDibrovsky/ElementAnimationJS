/**
 * Import modules
 */
import animateElements from "./modules/animation-elements";

document.addEventListener("DOMContentLoaded", function () {
  animateElements();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
